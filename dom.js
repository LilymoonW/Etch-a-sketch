let box = document.querySelectorAll(".item");
let sizeSelection = document.querySelector(".sizeButton");
let board = document.querySelector(".container");

//when hover over heading it will become bigger
sizeSelection.addEventListener("click", changeSize);
//default config
updateVariables();

function changeSize() {
  //asks user for information to construct new board
  const cols = prompt("Enter the number of columns: ");
  const rows = prompt("Enter the number of rows: ");

  // deletes current board
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  // adds number of boxes
  for (var i = 0; i < cols; i++) {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    for (var j = 0; j < rows; j++) {
      const newBox = document.createElement("div");
      newBox.classList.add("item");
      newCol.append(newBox);
    }
    board.append(newCol);
  }
  //re add hovering feature
  updateVariables();
}

// loops through each button and adds on hover function and updates the current number of squares
function updateVariables() {
    //updates variables
    box = document.querySelectorAll(".item");

  box.forEach((item) => {
    // and for each one we add a 'click' listener
    item.addEventListener("mouseover", hoverAction);
    item.addEventListener("mouseleave", leaveAction);
  });
  // Add more updates as needed
}

function hoverAction(e) {
  console.log("hover");
  this.style.transitionDelay = "10ms";

  this.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",150)";
}
function leaveAction(e) {
  console.log("leave");

  this.style.transitionDelay = "3s";
  this.style.backgroundColor = "white";
}
