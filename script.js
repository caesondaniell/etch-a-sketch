function createGrid () {
    for (let i = 0; i < 16; i++) {
        const container = document.querySelector(".container");
        const box = document.createElement("div");
        container.appendChild(box);
    }
}

createGrid();