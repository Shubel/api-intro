function posts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPosts(data))
};
posts();

function displayPosts(posts) {
    console.log(posts);
};