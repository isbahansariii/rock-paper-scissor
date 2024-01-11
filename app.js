// varaible accessed by html
let images = document.querySelectorAll(".img");

let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

let showResult = document.querySelector("#showResult");
let resetBtn = document.querySelector("#reset");

// variables required for code
let userScore = 0;
let compScore = 0;

// functions
const resetGame = () => {
  userScore = 0;
  compScore = 0;  
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  showResult.innerText = "--Result--";
  showResult.style.backgroundColor = "#031927";
};

const showScore = () => {
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
};

const showWinner = (userWin) => {
  if (userWin) {
    showResult.innerText = `User won the match, comp choose ${compChoice}`;
    showResult.style.backgroundColor = "#28A745";
    userScore++;
  } else {
    showResult.innerText = `Comp won the match, comp choose ${compChoice}`;
    showResult.style.backgroundColor = "#DC3545";
    compScore++;
  }
};

const draw = () => {
  //   console.log("Match Draw");
  showResult.innerText = "Match Draw!";
  showResult.style.backgroundColor = "#007BFF";
};

const playGame = (choice1, choice2) => {
  if (choice1 === choice2) {
    draw();
  } else {
    // match is not draw

    let userWin = true;

    if (choice1 === "rock") {
      userWin = choice2 === "paper" ? true : false; // we have 2 options paper, scissor
    } else if (choice1 === "paper") {
      userWin = choice2 === "scissor" ? true : false; // we have 2 options rock, scissor
    } else {
      userWin = choice2 === "rock" ? true : false; // we have 2 options paper, rock
    }

    showWinner(userWin);
  }
  showScore();
};

const genCompChoice = () => {
  choices = ["rock", "paper", "scissor"];
  ranIdx = Math.floor(Math.random() * 3); //generate number from 0-2 i.e. less than 3
  return choices[ranIdx];
};

let compChoice;

images.forEach((img) => {
  img.addEventListener("click", () => {
    const userChoice = img.getAttribute("id");
    compChoice = genCompChoice();
    playGame(compChoice, userChoice);
  });
});

resetBtn.addEventListener("click", resetGame);
