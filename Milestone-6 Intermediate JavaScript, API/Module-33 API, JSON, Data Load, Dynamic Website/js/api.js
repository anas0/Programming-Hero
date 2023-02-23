function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(res => res.json())
    .then(data => console.log(data));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}

function displayUsers(data){
    const ul = document.getElementById('users-list');
    const li = document.createElement('li');    

    for(const user of data){
        li.innerHTML += `
            <li>${user.name}</li>
        `;
    }
    ul.appendChild(li);
}