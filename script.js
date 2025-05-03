document.addEventListener("DOMContentLoaded", function (){
    createBoard(16);
})

function createBoard(size) {
    let boards = document.querySelector(".board");
    boards.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    boards.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div= document.createElement("div");
        boards.insertAdjacentElement("beforeend", div);

    }
}
