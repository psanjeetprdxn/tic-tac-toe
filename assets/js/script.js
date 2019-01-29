const message = document.getElementById("message");
document.turn = "X";

function setMessage(msg) {
  message.innerText = msg;
}

function startGame() {
  for (let i = 1; i <= 9; i++) {
    clearCell(i);
  }

  document.winner = null;
  setMessage(`${document.turn} get's to start first`);
}

function nextMove(cell) {
  if (document.winner != null) {
    setMessage(`${document.turn} has already won the game`);
  } else if (this.innerText === "") {
      this.innerText = document.turn;
      switchMove();
  } else {
    setMessage("Square isn't empty. Pick another");
  }
}

function switchMove() {
  if (checkForWinner(document.turn)) {
    document.winner = document.turn;
    setMessage(`${document.turn} won the game`);
  } else if (document.turn === "X") {
    document.turn = "O";
    setMessage(`"${document.turn}" turn`);
  } else {
    document.turn = "X";
    setMessage(`"${document.turn}" turn`);
  }
}

function checkForWinner(move) {
  let result = false;
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {
        result = true;
      }
      return result;
}

function checkRow(a, b, c, move) {
  let result = false;
  if (getCell(a) === move & getCell(b) === move & getCell(c) === move) {
    result = true;
  }
  return result;
}

function getCell(number) {
  return document.getElementById(number).innerText;
}

// Adding event listener to each of the cell

let cells = document.querySelectorAll("td");
for (cell of cells) {
  cell.addEventListener("click", nextMove);
}

function clearCell(number) {
  document.getElementById(number).innerText = " ";
}


document.getElementById("start").addEventListener("click", startGame);
