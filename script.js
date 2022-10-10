'use strict';
let luckyNumber = Math.trunc(Math.random()*50)+1;
let score = 10;
let highScore = 0;


document.querySelector(".check").addEventListener("click",()=>{
    const guessNumber = Number(document.querySelector(".guess").value);
    if(!guessNumber){
        document.querySelector(".message").textContent = "No Number";
    }else if(guessNumber === luckyNumber){
        document.querySelector(".message").textContent = "Correct Number";
        document.querySelector(".number").textContent = luckyNumber;
        document.querySelector("body").style.background = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if(highScore<score){
            highScore = score;
            document.querySelector(".highScore").textContent = highScore;
        }
    }else if(guessNumber > luckyNumber){
        document.querySelector(".message").textContent = "Too High Number";
        if(score>0){
        score--;
        document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "You Lose The Game!!";
            document.querySelector(".score").textContent =0;
        }  
    }else if(guessNumber < luckyNumber){
        document.querySelector(".message").textContent = "Too Low Number";
        if(score>0){
            score--;
            document.querySelector(".score").textContent = score;
            }else{
                document.querySelector(".message").textContent = "You Lose The Game!!";
                document.querySelector(".score").textContent =0;
                document.querySelector(".number").textContent = luckyNumber;
            }  
    }
})

document.querySelector(".again").addEventListener("click",()=>{
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector("body").style.background = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    score = 10;
    document.querySelector(".score").textContent = score;

})