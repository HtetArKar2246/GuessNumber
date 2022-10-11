'use strict';
let luckyNumber =Math.trunc(Math.random()*50)+1;
let score=10 ;
let highScore= 0 ;

//functions
const displayMessage = (message)=> document.querySelector(".message").textContent = message;
const backgroundColor =(color)=> document.querySelector("body").style.background = color;
const displayScore = (score)=> document.querySelector(".score").textContent = score;
const displayLuckyNumber = (luckyNumber)=>    document.querySelector(".number").textContent = luckyNumber;
const widthLuckyNumber = (luckyNumber)=>   document.querySelector(".number").style.width = luckyNumber;
const displayHighScore = (highScore) =>   document.querySelector(".highScore").textContent = highScore;

//contents
document.querySelector(".check").addEventListener("click",()=>{
    const guessNumber = Number(document.querySelector(".guess").value);
    if(!guessNumber){
        displayMessage("No Number");
    }else if(guessNumber === luckyNumber){
      displayMessage("Correct Number");
      displayLuckyNumber(luckyNumber);
      backgroundColor("#60b347");
    widthLuckyNumber("30rem");
        if(highScore<score){
            highScore = score;
           displayHighScore(highScore);
        }
    }else if(guessNumber !== luckyNumber){
        guessNumber > luckyNumber ? displayMessage("Too High Number") : displayMessage("Too Low Number");
        if(score>0){
        score--;
        displayScore(score);
        }else{
          displayMessage("You Lose The Game!!");
          displayScore(0);
        }  
    }
})

document.querySelector(".again").addEventListener("click",()=>{
    luckyNumber = Math.trunc(Math.random()*50)+1;
    score = 10;
    displayMessage("Start Guessing...");
    backgroundColor("#222");
    displayScore(score);
    displayLuckyNumber("?");
    widthLuckyNumber("15rem");
})

