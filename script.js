let color = "black";

document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function () {
        let size = getSize();
        if (size) {
            createBoard(size);
        }
    });
});

function createBoard(size) {
    let boards = document.querySelector(".board");
    boards.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    boards.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    boards.innerHTML = ""; // Clear the board before creating new cells
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        boards.insertAdjacentElement("beforeend", div);
    }
    console.log(`Created a board with ${numDivs} cells`); // Debugging
}

function getSize() {
    let input = prompt("What will be the size of the board? (1-100)");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Please enter a number";
    } else if (input < 1 || input > 100) {
        message.innerHTML = "Please enter a number between 1 and 100";
    } else {
        message.innerHTML = "Now you can play!";
        return Number(input);

    }
}

function colorDiv() {
    console.log("Hovered over a div"); // Debugging
    console.log(`Current color: ${color}`); // Debugging
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = `black`;
    }
}

function setColor(colorChoice) {
    console.log(`Button clicked: ${colorChoice}`); // Debugging
    color = colorChoice.toLowerCase(); // Normalize to lowercase
    console.log(`Color set to: ${color}`); // Debugging
}

function resetBoard() {
    let boards = document.querySelector(".board");
    boards.innerHTML = ""; // Clear all divs
    createBoard(16); // Reset to default size
}
