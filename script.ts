enum HttpMethod {
    GET = "GET",
}
interface User {
  id: number;
  name: string;
  email: string;
}
function fetchUsers(): void {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    })
    .then((users: User[]) => {
      console.log(users);
      const usersDOM = document.getElementById('users')!; 
      users.forEach((user: User, ind: number) => {
        const newUserDiv = document.createElement('div'); 
        newUserDiv.classList.add('userStyle');
        newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email}`; 
        usersDOM.appendChild(newUserDiv); 
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
fetchUsers();
  