const gridContainer = document.querySelector(".grid-container");
console.log(gridContainer);
gridContainer.textContent = "Hello, World!";

function toggleHighlight(e) {
    console.log(e.srcElement);
    if(e.srcElement.classList.contains('highlight')) {
        e.srcElement.classList.remove('highlight');
    } else {
        e.srcElement.classList.add('highlight');
    }
}

gridContainer.addEventListener('mouseover', toggleHighlight);
gridContainer.addEventListener('mouseout', toggleHighlight);