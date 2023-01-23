let clearScore = document.querySelector("#clear");
let liElement;
let highScoreOl;
function showScore(){
    let scores = JSON.parse(localStorage.getItem("highscores")) || [];
    scores.forEach(function(newScore){
        liElement = document.createElement("li");
        highScoreOl = document.querySelector("#highscores");
        liElement.textContent = newScore.initials + " -- " + newScore.score;
        highScoreOl.appendChild(liElement);
        
        
    });

}
showScore();



function clearScores(){
window.localStorage.removeItem("highscores");
highScoreOl.classList.add('hide');

}

clearScore.addEventListener("click", clearScores);