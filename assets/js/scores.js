let clearScore = document.querySelector("#clear");
let liElement;
let highScoreOl;

// used so grab scores from local storage and add the text to a li element and then append the li to ol
function showScore() {
  let scores = JSON.parse(localStorage.getItem("highscores")) || [];
  scores.forEach(function (newScore) {
    liElement = document.createElement("li");
    highScoreOl = document.querySelector("#highscores");
    liElement.textContent = newScore.initials + " -- " + newScore.score;
    highScoreOl.appendChild(liElement);
  });
}
showScore();

// clears local storage and hides ol elements with previous score text
function clearScores() {
  window.localStorage.removeItem("highscores");
  highScoreOl.classList.add("hide");
}
clearScore.addEventListener("click", clearScores);
