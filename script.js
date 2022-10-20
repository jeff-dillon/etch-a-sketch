function toggleHighlight(e) {
    e.srcElement.classList.add('highlight');
}

function createGrid(numBoxes = 16) {
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

function shake() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        if(block.classList.contains('highlight')) {
            block.classList.remove('highlight');
        }
    });
}

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', promptForSize);

const shakeBtn = document.querySelector("#shake");
shakeBtn.addEventListener('click', shake);


createGrid();
