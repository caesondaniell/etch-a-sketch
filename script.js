drawGrid();

const resize = document.querySelector(".grid-size");
const clear = document.querySelector(".clear");

resize.addEventListener("click", () => {
    let dimensions;
    const boxesPerSide = prompt("How many squares per side? Enter a whole number from 8 to 100.");
    if (boxesPerSide === "") dimensions = 16
    else if (boxesPerSide < 8) dimensions = 8
    else if (boxesPerSide > 100) dimensions = 100
    else dimensions = boxesPerSide;
    if (!(boxesPerSide === null)) drawGrid(dimensions);
})

clear.addEventListener("click", () => {
    const squares = document.querySelectorAll("div div");
    squares.forEach((square) => square.style.backgroundColor = "white")
})

function drawGrid(dimension = 16) {
    const container = document.querySelector(".container");
    const colorSelector = document.querySelector(".color-selector");
    container.innerHTML = "";
    colorSelector.value = "#000000";
    for (let i = 0; i < (dimension * dimension); i++) {
        const box = document.createElement("div");
        container.appendChild(box);
    }
    const boxDimensions = document.querySelectorAll("div div");
    boxDimensions.forEach((box) => {
        box.setAttribute("style", `border: 0.01em solid black; 
            width: ${(Math.floor((100/dimension) * 100)) / 100}%;
            height: ${(Math.floor((100/dimension) * 100)) / 100}%;`)
    });
    const squares = document.querySelectorAll("div div");
    let shift = false;
    document.addEventListener("keydown", (event) => {
        if (event.key === "Shift") shift = true;
    })
    document.addEventListener("keyup", (event) => {
        if (event.key === "Shift") shift = false;
    })
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            if (!shift) square.style.backgroundColor = colorSelector.value;
        })
    })
}