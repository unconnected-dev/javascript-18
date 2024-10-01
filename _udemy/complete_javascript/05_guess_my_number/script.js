'use strict';

//DOM - Document Object Model
//Is automatically created by the browser as soon as the HTML page loads
//It starts with the document object, which is a special object that serves as the entry point
//Start from document as an accessor to the html child and drill down

//DOM is a Web API, not a part of JavaScript

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct Number`;
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 21;
// document.querySelector(`.guess`).value = 5;


//Generate a random number
let secretNumber = newSecretNumber();
let theScore     = Number(document.querySelector(`.score`).textContent);
let highScore    = 0;
document.querySelector(`.highscore`).textContent = highScore;

//Reset
document.querySelector(`.again`).addEventListener(`click`, function(){

    document.querySelector(`body`).style.backgroundColor = `#222222`;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.width = `15rem`
    document.querySelector(`.message`).textContent = `Start guessing...`;

    document.querySelector(`.guess`).value = ``;

    theScore = 20;
    document.querySelector(`.score`).textContent = theScore;

    secretNumber = newSecretNumber();
});


//A function is just a value, so it can be passed
//This passes an anonymous function into the event handler
document.querySelector(`.check`).addEventListener(`click`, function(){
    const guess = Number(document.querySelector(`.guess`).value);

    let responseMessage = ``;

    if(theScore > 1){
        if(!guess){                          
            responseMessage = `No number!`;
            theScore--;
        }
        else if(guess !== secretNumber){
            responseMessage = guess < secretNumber ? `Go higher!` : `Go lower`;
            theScore--;
        }   
        else{
            responseMessage = `Correct number!`;
            document.querySelector(`.number`).textContent = secretNumber;
            document.querySelector(`body`).style.backgroundColor = `#60b347`;
            document.querySelector(`.number`).style.width = `30rem`

            if(theScore > highScore){
                highScore = theScore;
                document.querySelector(`.highscore`).textContent = highScore;
            }
        }
    }
    else{
        responseMessage = `You lost the game`;
        theScore = 0;
    }

    document.querySelector(`.score`).textContent = theScore;
    document.querySelector(`.message`).textContent = responseMessage;
});


function newSecretNumber(){
    return Math.trunc(Math.random() * 20) + 1;
}