for (let i = 0; i < 256; i++) {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    container.appendChild(box);
}

const squares = document.querySelectorAll("div div");
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
})