let selectedColor = 'Black';

const blackBtn = document.querySelector("#black");
blackBtn.addEventListener('click', toggleColor);
blackBtn.classList.add('selected-button');

const rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener('click', toggleColor);

const shakeBtn = document.querySelector("#clear");
shakeBtn.addEventListener('click', clear);

/**
 * Highlight a block.
 * @param {Event} e 
 */
function toggleHighlight(e) {
    if(selectedColor == "Black") {
        e.target.className = 'block';
        e.target.classList.add('black');
    } else {
        const colors = ["cantina-red", "cantina-yellow", "cantina-blue", 
                        "cantina-orange", "cantina-green"];
        const random = Math.floor(Math.random() * colors.length);
        e.target.className = 'block';
        e.target.classList.add(colors[random]);    
    }
};

/**
 * Create a new grid that is numBoxes x numBoxes in size.
 * @param {Number} numBoxes - The number of blocks per side. default is 16.
 */
function createGrid(numBoxes = 55) {
    const gridContainer = document.querySelector(".game-screen");
    gridContainer.style.setProperty('--grid-rows', numBoxes);
    gridContainer.style.setProperty('--grid-cols', numBoxes * 2);
    for(i = 0; i < (numBoxes * numBoxes) * 2; i++) {
        const div = document.createElement('div');
        div.className = 'block';
        div.addEventListener('mouseover', toggleHighlight);
        gridContainer.appendChild(div);
    }
};

/**
 * Remove all of the blocks from the grid.
 */
function clearGrid() {
    const gridContainer = document.querySelector(".game-screen");
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};

/**
 * Reset all of the highlighted blocks
 * @param {Event} e - event object passed from the listener
 */
function clear(e) {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.classList.value = 'block';
    });
};

/**
 * Toggle between Black and Rainbow
 * @param {Event} e 
 */
function toggleColor(e) {
    if(e.target.textContent == "Black") {
        selectedColor = 'Black';
        e.target.classList.add('selected-button');
        const rainbowBtn = document.querySelector('#rainbow');
        rainbowBtn.classList.remove('selected-button');
    } else {
        selectedColor = 'Rainbow';
        e.target.classList.add('selected-button');
        const blackBtn = document.querySelector('#black');
        blackBtn.classList.remove('selected-button');
    }
};

createGrid();
