/* Its about Tic Tac Toe. (Ninth Program) (Project). */

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  // Make sure game board is visible
  document.querySelector(".container").style.display = "flex";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `🎉 Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  // Hide the game board, show message overlay
  document.querySelector(".container").style.display = "none";
  disableBoxes();
};

const checkDraw = () => {
  return [...boxes].every((box) => box.innerText !== "");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  }
  if (checkDraw()) {
    msg.innerText = "🤝 It's a Draw! Well played";
    msgContainer.classList.remove("hide");
    // Hide the game board, show message overlay
    document.querySelector(".container").style.display = "none";
    disableBoxes();
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
