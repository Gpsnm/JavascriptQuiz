let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let timerCount = 120;
let timer;

function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questionEl.removeAttribute("class");
  timer = setInterval(() => {
    timeEl.textContent = timerCount;
    timerCount--;
  }, 1000);
}

startBtn.addEventListener("click", startQuiz);
