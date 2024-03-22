let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const userScoreText = document.querySelector("#user-score");
const compScoreText = document.querySelector("#comp-score");
const resetButton = document.querySelector("#reset-btn");

const showWinner = (isUserWin, userChoice, compChice) => {
    if(isUserWin){
        userScore++;
        userScoreText.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChice}`;
        msgContainer.style.backgroundColor = "green";
    }
    else{
        comScore++;
        compScoreText.innerText = comScore;
        msg.innerText = `You Lose! ${compChice} beats your ${userChoice}`;
        msgContainer.style.backgroundColor = "red";
    }
}

const gameDraw = () => {
    msg.innerText = "Game Drawn. Play Again.";
    msgContainer.style.backgroundColor = "black";
}

const genCompChoice = () => {
    const allChoices = ["stone", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    return allChoices[index];
}

const playGame = (userChoice) => {
    const compChice = genCompChoice();

    //draw
    if(compChice === userChoice){
        gameDraw();
    }
    else{
        let isUserWin = false;
        if(userChoice === "stone")
            isUserWin = compChice === "scissors" ? true : false;
        
        if(userChoice === "paper")
            isUserWin = compChice === "stone" ? true : false;
        
        if(userChoice === "scissors")
            isUserWin = compChice === "paper" ? true : false;

        showWinner(isUserWin, userChoice, compChice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetButton.addEventListener("click", () => {
    userScore = 0;
    comScore = 0;
    userScoreText.innerText = userScore;
    compScoreText.innerText = comScore;

    msg.innerText = "Play Your Move";
    msgContainer.style.backgroundColor = "black";
})