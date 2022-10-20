
/**
 * Highlight a cell.
 * @param {Event} e 
 */
function toggleHighlight(e) {
    e.target.classList.add('highlight');
}

/**
 * Create a new grid that is numBoxes x numBoxes in size.
 * @param {Number} numBoxes - The number of boxes per side. default is 16.
 */
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

/**
 * Remove all of the blocks from the grid.
 */
function clearGrid() {
    const gridContainer = document.querySelector(".grid-container");
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

/**
 * Ask the user to enter the desired grid size (1-100)
 * @param {Event} e - event object passed from the listener
 */
function promptForSize(e) {
    let gridSize = 0;
    do {
        gridSize = parseInt(prompt("Enter grid size (1-100):"));
    } while (isNaN(gridSize) || gridSize > 100 || gridSize < 1);
    clearGrid();
    createGrid(gridSize);
}


/**
 * Reset all of the highlighted blocks
 * @param {Event} e - event object passed from the listener
 */
function shake(e) {
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
