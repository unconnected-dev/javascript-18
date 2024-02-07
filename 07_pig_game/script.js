'use strict';


//Selecting Elements
const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`);          //This will get a unique id and doesn't require #

const player0Element = document.querySelector(`.player--0`)
const player1Element = document.querySelector(`.player--1`)

const diceElement   = document.querySelector(".dice");

const buttonNewElement  = document.querySelector(`.btn--new`);
const buttonRollElement = document.querySelector(`.btn--roll`);
const buttonHoldElement = document.querySelector(`.btn--hold`);

//Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add(`hidden`);

let scores, currentScore, activePlayer, playing;

function init(){
    scores       = [0, 0];
    currentScore = 0;
    playing      = true;
    
    score0Element.textContent = 0;
    score1Element.textContent = 0;

    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;

    player0Element.classList.remove('player--active');
    player1Element.classList.remove('player--active');

    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');

    diceElement.classList.add('hidden');
    
    const randomPlayerStart = Math.trunc(Math.random() * 2) + 1;
    randomPlayerStart === 1 ? activePlayer = 0 : activePlayer = 1;
    randomPlayerStart === 1 ? player0Element.classList.toggle(`player--active`) : player1Element.classList.toggle(`player--active`);
    // console.log(`randomPlayer: ${randomPlayerStart}`);
    // console.log(`activePlayer: ${activePlayer}`);
}
init();

buttonRollElement.addEventListener(`click`, function(){
    if(playing){
        //Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(`Rolled: ${dice}`);

        //Display dice
        diceElement.classList.remove(`hidden`);
        diceElement.src = `dice-${dice}.png`;

        //Check for rolled 1: if true, switch to next player
        if(dice !== 1){
            //Add dice to the current score
            currentScore+= dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else{
            switchPlayer();
        }
    }
});


buttonHoldElement.addEventListener('click', function(){
    if(playing){
        console.log('Hold Button');
        scores[activePlayer]+=currentScore;
        
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 10){
            playing = false;

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            
            diceElement.classList.add(`hidden`);
        }
        else
            switchPlayer();
    }
});



function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //Switch to the next player
    activePlayer = activePlayer ? 0 : 1;
    currentScore = 0;

    //Will add or remove a class depending if it is there or not
    player0Element.classList.toggle(`player--active`);
    player1Element.classList.toggle(`player--active`);
}

//Don't use (), otherwise it fires automatically on load
buttonNewElement.addEventListener('click', init);