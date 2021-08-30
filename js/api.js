fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data.title));

// load data from json
function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => console.log(data));
};

// load users from json
function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUsers(data));
}

// display users from load users
function displayUsers(data) {
    const ul = document.getElementById("users");
    // console.log(data);
    for (const user of data) {
        // console.log(user);
        const liAdded = document.createElement("li");
        liAdded.innerText = `Name: ${user.name} and Email: ${user.email} and address: ${user.address.street}`;
        ul.appendChild(liAdded);
    }
}

// load posts from json
function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => console.log(data));
}

