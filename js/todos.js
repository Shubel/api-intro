function todoList() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayedTitles(data))
};
todoList();

function displayedTitles(titles) {
    const titleID = document.getElementById("title");
    for (const title of titles) {
        // console.log(title);
        const paragraph = document.createElement("p");
        paragraph.innerText = `Title: ${title.title}`;
        titleID.appendChild(paragraph);
    }
}