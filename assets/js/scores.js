
function showScore(){
    let scores = JSON.parse(localStorage.getItem("highScores")) || [];
    console.log("hi");
    scores.array.forEach(function(){
        let liElement = document.createElement("li");
        let highScoreOl = document.querySelector("#highscores");
        liElement.textContent = Score.initials + " -- " + newScore.score;
        highScoreOl.appendChild(liElement);
        
        
    });

}

showScore;

