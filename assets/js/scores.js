
function showScore(){
    let scores = JSON.parse(localStorage.getItem("highsScores")) || [];
    scores.array.forEach(function(newScore){
        let liElement = document.createElement("li");
        liElement.textContent = newScore.initial + " -- " + newScore.score;
        let highScoreOl = document.querySelector("#highscores");
        highScoreOl.appendChild(liElement);
        
    });

}

showScore;