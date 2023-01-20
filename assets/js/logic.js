let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let choicesBtn1 = document.createElement("button");
let choicesBtn2 = document.createElement("button");
let choicesBtn3 = document.createElement("button");
let choicesBtn4 = document.createElement("button");
let timerCount = 120;
let timer;



// function that changes classes on start screen and question and also starts a timer.
function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questionEl.removeAttribute("class");
  timer = setInterval(() => {
    timeEl.textContent = timerCount;
    timerCount--;
  }, 1000);
  getQuestions()
}

startBtn.addEventListener("click", startQuiz);


function getQuestions(){
questionTitle.textContent = (questionsArr[0].questions);

choices.appendChild(choicesBtn1);
choicesBtn1.setAttribute("class", "choices");
choicesBtn1.textContent = questionsArr[0].choice[0];
choices.appendChild(choicesBtn2);
choicesBtn2.setAttribute("class", "choices");
choicesBtn2.textContent = questionsArr[0].choice[1];
choices.appendChild(choicesBtn3);
choicesBtn3.setAttribute("class", "choices");
choicesBtn3.textContent = questionsArr[0].choice[2];
choices.appendChild(choicesBtn4);
choicesBtn4.setAttribute("class", "choices");
choicesBtn4.textContent = questionsArr[0].choice[3];



}
