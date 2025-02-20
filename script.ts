// Енам для HTTP методів
enum HttpMethod {
    GET = "GET",
  }
  
  // Інтерфейс для користувача, який містить поля id, name та email
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Функція для виконання запиту на отримання списку користувачів
  function fetchUsers(): void {
    // Виконуємо GET запит за допомогою fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Якщо відповідь не успішна, викидаємо помилку
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((users: User[]) => {
        // Обробляємо отриманих користувачів
        console.log(users);
        const usersDOM = document.getElementById('users')!; // Знаходимо DOM елемент для виведення користувачів
        users.forEach((user: User, ind: number) => {
          const newUserDiv = document.createElement('div'); // Створюємо новий елемент для кожного користувача
          newUserDiv.classList.add('userStyle');
          newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email}`; // Виводимо дані користувача
          usersDOM.appendChild(newUserDiv); // Додаємо елемент на сторінку
        });
      })
      .catch((error) => {
        // Ловимо помилки і виводимо їх в консоль
        console.error(error);
      });
  }
  
  // Викликаємо функцію fetchUsers для отримання та відображення користувачів
  fetchUsers();
  