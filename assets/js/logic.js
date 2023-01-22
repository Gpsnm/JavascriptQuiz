let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let feedBack = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("final-score");
let choicesBtn;
let timerCount = 120;
let timer;
let indexNumber = 0;

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
  for (let i = 0; i < 4; i++) {
    choicesBtn = document.createElement("button");
    choices.appendChild(choicesBtn);
    choicesBtn.setAttribute("class", "choices");
    answerOptions = questionsArr[indexNumber].choice[i];
    choicesBtn.textContent = answerOptions;
    choicesBtn.addEventListener("click", questions);
  }
}


function questions(){
if (this.textContent !== questionsArr[indexNumber].answer){
timerCount -= 10;
timeEl.textContent = timerCount;
feedBack.textContent = "Wrong";
// play sound
} else {
  feedBack.textContent = "Correct";
}
feedBack.removeAttribute("class", "hide");

setTimeout(() => {
  feedBack.setAttribute("class", "hide");
}, 1000);
indexNumber++
if (indexNumber === questionsArr.length){
  endQuiz()
} else {
getQuestions();
}
}



function endQuiz(){
  clearInterval(timer);
  endScreen.classList.remove("hide");
  finalScore.textContent = timerCount;
  questionEl.classList.add("hide");

}





