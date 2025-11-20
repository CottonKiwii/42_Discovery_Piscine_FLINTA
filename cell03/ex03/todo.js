let button = document.getElementById("button");

let updateCookie = () => {
    let ul = document.getElementById("ul");

    document.cookie.split(';').forEach(item => {
        document.cookie = `${item};expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    })
    Array.from(ul.getElementsByTagName("div")).forEach((item, index) => {
        document.cookie = `${index}=${item.textContent}`;
    })
}

if (document.cookie.length) {
    let cookies = document.cookie.split(';')
    let ul = document.getElementById("ul");

    let todos = cookies.map(item => {
        let todo = item.split('=')[1]
        return todo;
    })

    todos.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = `<div>${item}</div>`
        li.addEventListener("click", event => {
            if (confirm("Yes or No want to remove that?"))
                li.remove();
            updateCookie();
        });
        ul.append(li);
    })
}


button.addEventListener("click", () => {
    let todo = prompt("Todo:");
    let newLi = document.createElement("li");
    let ul = document.getElementById("ul");

    if (todo.length === 0)
        return ;
    newLi.innerHTML = `<div>${todo}</div>`;
    newLi.addEventListener("click", () => {
        if (confirm("Yes or No want to remove that?"))
            newLi.remove();
        updateCookie();
    });
    ul.insertBefore(newLi, ul.firstChild);

    updateCookie();
})