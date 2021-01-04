//Variables

const containerRef = document.querySelector(".container");
const gameOptionRef = document.querySelector(".gameoptions");
const undoBtn = document.querySelector(".undo");
//Eventlistners

//Creating elements in a function
let rowCount = 16;

function createGrid(rowCount) {
    for (let i = 0; i < rowCount * rowCount; i++) {
        let createDiv = document.createElement("div");

        createDiv.classList.add("box");
        createDiv.style.flexBasis = 100 / rowCount + "%";
        createDiv.style.flexShrink = 1;
        createDiv.count = 0;
        createDiv.addEventListener("mouseover", (e) => {
            e.target.count += 1;
            let alphaValue = e.target.count * 0.2;
            e.target.style.backgroundColor = "rgba(0,0,0," + alphaValue + ")";
            console.log(
                (e.target.style.backgroundcolor =
                    "rgba(0,0,0," + alphaValue + ")")
            );
        });
        containerRef.appendChild(createDiv);
    }
}

//Creating button and reset function
function gameOptions() {
    let createButton = document.createElement("button");
    createButton.classList.add("btn");
    createButton.classList.add("undo");
    createButton.innerHTML = '<i class="fas fa-undo"></i>';
    gameOptionRef.appendChild(createButton);
    createButton.addEventListener("click", erase);
}

function erase() {
    const gridBoxes = document.querySelectorAll(".container > div");

    gridBoxes.forEach((item) => {
        item.style.backgroundColor = "rgba(0,0,0,0)";
        item.count = 0;
    });
}

function selectGridSize() {
    let selectedGrid = prompt("Please choose the size of your canvas, x * x.");
    return selectedGrid;
}

gameOptions();
createGrid(16);
selectGridSize();
