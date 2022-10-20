function toggleHighlight(e) {
    e.srcElement.classList.add('highlight');
}

function createGrid(numBoxes) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.setProperty('--grid-rows', numBoxes);
    gridContainer.style.setProperty('--grid-cols', numBoxes);
    for(i = 0; i < numBoxes * numBoxes; i++) {
        const div = document.createElement('div');
        div.className = 'block';
        div.addEventListener('mouseover', toggleHighlight);
        gridContainer.appendChild(div);
    }
}

function clearGrid() {
    const gridContainer = document.querySelector(".grid-container");
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function promptForSize() {
    let gridSize = 0;
    do {
        gridSize = parseInt(prompt("Enter grid size (1-100):"));
    } while (isNaN(gridSize) || gridSize > 100 || gridSize < 1);
    clearGrid();
    createGrid(gridSize);
}

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', promptForSize);

const defaultGridSize = 16;
createGrid(defaultGridSize);
