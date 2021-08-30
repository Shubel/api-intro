function posts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPosts(data))
};
posts();

function displayPosts(posts) {
    const divID = document.getElementById("divAdded");
    // console.log(posts);
    for (const post of posts) {
        // console.log(post);
        // console.log(post.title);
        // console.log(post.body);
        const divAdded = document.createElement("div");
        divAdded.classList.add("postStyle");
        divAdded.innerHTML = `<h2>Title : ${post.title}</h2>
        <p>Body : ${post.body}</p>`
        divID.appendChild(divAdded);
    }
};