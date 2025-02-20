"use strict";
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
})(HttpMethod || (HttpMethod = {}));
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return response.json();
    })
        .then((users) => {
        console.log(users);
        const usersDOM = document.getElementById('users'); 
        users.forEach((user, ind) => {
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
