let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let timerCount = 120;
let timer;



// function that changes classes on start screen and question and also starts a timer.
// function startQuiz() {
//   startScreen.setAttribute("class", "hide");
//   questionEl.removeAttribute("class");
//   timer = setInterval(() => {
//     timeEl.textContent = timerCount;
//     timerCount--;
//   }, 1000);
//   getQuestions()
// }

// startBtn.addEventListener("click", startQuiz);


function getQuestions(){
questionTitle.textContent = (questionsArr[0].questions);

for (let i = 0; i < 4; i++){
let choicesBtn = document.createElement("button");
choices.appendChild(choicesBtn);
choicesBtn.setAttribute("class", "choices");
choicesBtn.textContent = questionsArr[0].choice[i];
};
};


getQuestions();