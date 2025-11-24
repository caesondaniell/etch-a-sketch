drawGrid();

const resize = document.querySelector(".canvas-size");
resize.addEventListener("click", () => {
    let dimensions;
    const boxesPerSide = prompt("How many squares per side? Enter a whole number from 8 to 100.");
    if (!boxesPerSide) dimensions = 16
    else if (boxesPerSide < 8) dimensions = 8
    else if (boxesPerSide > 100) dimensions = 100
    else dimensions = boxesPerSide;
    drawGrid(dimensions);
})

function drawGrid(dimension = 16) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < (dimension * dimension); i++) {
        const box = document.createElement("div");
        container.appendChild(box);
    }
    const boxDimensions = document.querySelectorAll("div div");
    boxDimensions.forEach((box) => {
        box.setAttribute("style", `border: 0.01em solid black; 
            width: ${(Math.round((100/dimension) * 100)) / 100}%;
            height: ${(Math.round((100/dimension) * 100)) / 100}%;`)
    });
    const squares = document.querySelectorAll("div div");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        })
    })
}