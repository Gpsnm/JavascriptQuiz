
function showScore(){
    let scores = JSON.parse(localStorage.getItem("highscores")) || [];
    scores.forEach(function(newScore){
        let liElement = document.createElement("li");
        let highScoreOl = document.querySelector("#highscores");
        liElement.textContent = newScore.initials + " -- " + newScore.score;
        highScoreOl.appendChild(liElement);
        
        
    });

}
showScore();

function clearScores(){
    
}