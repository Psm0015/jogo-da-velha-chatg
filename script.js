
  let currentPlayer = "X";
  let cells = document.getElementsByClassName("cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(event) {
      if (event.target.innerHTML === "") {
        event.target.innerHTML = currentPlayer;
        checkWinner();
        switchPlayer();
      }
    });
  }

  function switchPlayer() {
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }

  function checkWinner() {
    let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      let combination = winningCombinations[i];
      if (
        cells[combination[0]].innerHTML === currentPlayer &&
        cells[combination[1]].innerHTML === currentPlayer &&
        cells[combination[2]].innerHTML === currentPlayer
      ) {
        Swal.fire({
          title: `Jogador ${currentPlayer} ganhou!`,
          text: "Clique em OK para jogar novamente",
          icon: "success",
          confirmButtonText: "OK"
        }).then(() => {
          for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = "";
          }
        });
        return;
      }
    }

    let draw = true;
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerHTML === "") {
        draw = false;
        break;
      }
    }

    if (draw) {
      Swal.fire({
        title: "Empate!",
        text: "Clique em OK para jogar novamente",
        icon: "warning",
        confirmButtonText: "OK"
      }).then(() => {
        for (let i = 0; i < cells.length; i++) {
          cells[i].innerHTML = "";
        }
      });
    }
  }
