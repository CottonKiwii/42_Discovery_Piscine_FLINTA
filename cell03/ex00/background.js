let body = document.getElementById("body");
let button = document.getElementById("button");

let getRandomColor = () => {
    let str = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += str[Math.floor(Math.random() * 16)];
    }
    return color;
}

body.style.backgroundColor = getRandomColor();

button.addEventListener("click", () => {
    body.style.backgroundColor = getRandomColor();
})