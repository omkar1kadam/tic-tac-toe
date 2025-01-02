let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgConatiner = document.querySelector(".msg-conatiner");
let msg = document.querySelector("#msg");

let turn = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn = true;
    enableboxes();
    msgConatiner.classList.add("hide");
}
const newGame = () => {
    // Reset the game state
    turn = true;
    enableboxes();
    msgConatiner.classList.add("hide");
    console.log("New game started!");
};

// Add event listener for the New Game button
newGameBtn.addEventListener("click", newGame);


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
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

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "" ) {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}

resetbtn.addEventListener("click", resetGame);
