const cells = document.querySelectorAll("td");
let turn = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (this.textContent === "") {
      this.textContent = turn;
      checkWin();
      checkDraw();
      changeTurn();
    }
  });
}

function changeTurn() {
  turn = turn === "X" ? "O" : "X";
}

function checkWin() {
  const combinations = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (
      cells[a].textContent === turn &&
      cells[b].textContent === turn &&
      cells[c].textContent === turn
    ) {
      alert(`${turn} ganhou!`);
      resetBoard();
    }
  }
}

function checkDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return;
    }
  }
  alert("Empate!");
  resetBoard();
}

function resetBoard() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
}
turn = "X";
}

