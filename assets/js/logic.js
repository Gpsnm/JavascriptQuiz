// Global Variables

let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let feedBack = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let playerEl = document.querySelector("#initials");
let submitBtn = document.querySelector("#submit");
let choicesBtn;
let timerCount = 60;
let timer;
let indexNumber = 0;
let incorrectAudio = new Audio("./assets/sfx/incorrect.wav");
let correctAudio = new Audio("./assets/sfx/correct.wav");

// function that changes classes on start screen and question and also starts a timer.
function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questionEl.removeAttribute("class");
  timer = setInterval(() => {
    timeEl.textContent = timerCount;
    timerCount--;
  }, 1000);
  getQuestions();
}
// used to start quiz and call start quiz function
startBtn.addEventListener("click", startQuiz);

// function to get questions and answers.
function getQuestions() {
  questionTitle.textContent = questionsArr[indexNumber].questions;
  choices.innerHTML = " ";
  // loop to create 4 button elements and append them to the choices div
  for (let i = 0; i < 4; i++) {
    choicesBtn = document.createElement("button");
    choices.appendChild(choicesBtn);
    choicesBtn.setAttribute("class", "choices");
    answerOptions = questionsArr[indexNumber].choice[i];
    choicesBtn.textContent = answerOptions;
    choicesBtn.addEventListener("click", questions);
  }
}

// used to determine if answer is correct or incorrect and what to do based on result.
function questions() {
  if (this.textContent !== questionsArr[indexNumber].answer) {
    timerCount -= 10;
    if (timerCount < 0) {
      timerCount = 0;
    }
    // play sound
    incorrectAudio.play();
    timeEl.textContent = timerCount;
    feedBack.textContent = "Wrong";
  } else {
    feedBack.textContent = "Correct";
    // play sound
    correctAudio.play();
  }
  feedBack.removeAttribute("class", "hide");

  setTimeout(() => {
    feedBack.setAttribute("class", "hide");
  }, 1000);
  indexNumber++;
  if (indexNumber === questionsArr.length || timerCount <= 0) {
    endQuiz();
  } else {
    getQuestions();
  }
}

// ends quiz prints total score = to time left on timer
function endQuiz() {
  clearInterval(timer);
  endScreen.classList.remove("hide");
  finalScore.textContent = timerCount;
  questionEl.classList.add("hide");
}

// created a key in local storage that is pushed into an object
function HighScorer() {
  playerInitial = playerEl.value.trim();
  if (playerInitial) {
    let highScore = JSON.parse(localStorage.getItem("highscores")) || [];
    let newScore = {
      score: timerCount,
      initials: playerInitial,
    };
    highScore.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highScore));
    window.location.href = "highscores.html";
  } else {
    alert("blanks");
  }
}
// added event listener to run highscorer function on click of submit button
submitBtn.addEventListener("click", HighScorer);
