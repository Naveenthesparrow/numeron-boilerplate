// Iteration 2: Generate 2 random number and display it on the screen
var number1box=document.getElementById("number1");
var number1=Math.round(Math.random()*100);
number1box.innerHTML=number1
var number2box=document.getElementById("number2");
var number2=Math.round(Math.random()*100);
number2box.innerHTML=number2
// Iteration 3: Make the options button functional
const greaterBtn = document.getElementById("greater-than");
const equalBtn=document.getElementById("equal-to");
const lesserBtn=document.getElementById("lesser-than");
var score=0;
greaterBtn.addEventListener("click",function greaterCheck(){
    if (number1>number2){
        score++;
        resetTime(timerId);
    } else {
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    number1box.innerHTML=number1;
    number2=Math.round(Math.random()*100);
    number2box.innerHTML=number2;
});
equalBtn.addEventListener("click",function equalCheck(){
    if (number1==number2){
        score++;
        resetTime(timerId);
    } else {
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    number1box.innerHTML=number1;
    number2=Math.round(Math.random()*100);
    number2box.innerHTML=number2;
});
lesserBtn.addEventListener("click",function lesserCheck(){
    if (number1<number2){
        score++;
        resetTime(timerId);
    } else {
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    number1box.innerHTML=number1;
    number2=Math.round(Math.random()*100);
    number2box.innerHTML=number2;
});
// Iteration 4: Build a timer for the game
var time =5;
var timer=document.getElementById("timer");
var timerId;

function startTimer() {
    time = 5;
    timer.innerHTML = time;
    timerId = setInterval(() => {
      time--;
      if (time == 0) {
        location.href = "./gameover.html";
      }
      timer.innerHTML = time;
    }, 1000);
    localStorage.setItem("score", score);
  }
function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();