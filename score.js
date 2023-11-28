// Iteration 5: Store the player score and display it on the game over screen
let score=localStorage.getItem("score");
console.log(score)

var scoreBoard=document.getElementById("score-board");
var playAgainBtn=document.getElementById("play-again-button");
scoreBoard.innerHTML = score;
playAgainBtn.onclick=(evt)=>{
    location.href = "./game.html";
};