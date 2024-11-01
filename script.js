let boxes = document.querySelectorAll(".box");
let restartBtn = document.querySelector("#restart");
let newGamebtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg")
let turnO = true;
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turnO = true
    enableBoxes();
    msgContainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked")
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "x"
            turnO = true
        }
        box.disabled = true;

        checkwinner();
    })

})
const disableBoxes = () => {
    for (let box of boxes)
        box.disabled = true;
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disable = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratutation you are ,winner${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                pos1Val.style.color = "yellow";
            }

        }

    }

};
restartBtn.addEventListener("click", resetGame);
restartBtn.style.backgroundColor="yellow"
restartBtn.style.color="red"
newGamebtn.addEventListener("click",resetGame)

