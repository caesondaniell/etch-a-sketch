const resize = document.querySelector(".grid-size");
const clear = document.querySelector(".clear");
const gridLines = document.querySelector(".grid-lines");

createPalette();

resize.addEventListener("click", () => {
    let dimensions;
    const boxesPerSide = prompt("How many squares per side? Enter a whole number from 8 to 100.");
    if (boxesPerSide === "") dimensions = 16
    else if (boxesPerSide < 8) dimensions = 8
    else if (boxesPerSide > 100) dimensions = 100
    else dimensions = boxesPerSide;
    if (!(boxesPerSide === null)) createPalette(dimensions);
})

clear.addEventListener("click", () => {
    const squares = document.querySelectorAll("div div");
    squares.forEach((square) => square.style.backgroundColor = "white")
})

function toggleGridLines() {
    gridLines.textContent = gridLines.textContent === "HIDE GRIDLINES" ?
    "SHOW GRIDLINES" :
    "HIDE GRIDLINES";
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((gridBox) => {
        if (gridBox.style.border === "0.01em solid black") {
            gridBox.style.border = ""
        } else gridBox.style.border = "0.01em solid black";
    })
}

gridLines.addEventListener("click", toggleGridLines);

function createPalette(dimension = 16) {
    const container = document.querySelector(".container");
    const colorSelector = document.querySelector(".color-selector");
    if (gridLines.textContent === "SHOW GRIDLINES") {
        gridLines.textContent = "HIDE GRIDLINES"
    }
    container.innerHTML = "";
    colorSelector.value = "#000000";
    for (let i = 0; i < (dimension * dimension); i++) {
        const box = document.createElement("div");
        box.classList.add("grid-box");
        container.appendChild(box);
    }
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((gridBox) => {
        gridBox.setAttribute("style", `border: 0.01em solid black; 
            width: ${(Math.floor((100/dimension) * 100)) / 100}%;
            height: ${(Math.floor((100/dimension) * 100)) / 100}%;`)
    });
    let shift = false;
    document.addEventListener("keydown", (event) => {
        if (event.key === "Shift") shift = true;
    })
    document.addEventListener("keyup", (event) => {
        if (event.key === "Shift") shift = false;
    })
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseenter", () => {
            if (!shift) gridBox.style.backgroundColor = colorSelector.value;
        })
    })
}