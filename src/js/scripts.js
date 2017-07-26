'use strict';

let attempts = 5;
const randomNumber = Math.floor((Math.random() * 50) + 1);

const attemptsStr = document.getElementById('attempts');
const guessingInput = document.getElementById('guessingInput');
const guessingBtn = document.getElementById('guessingBtn');

attemptsStr.innerHTML = attempts;


let alertMsg = message => {
    document.getElementById("alertMsg").innerHTML = message; 
}

let guessNumber = () => {

    let guessingInputValue = guessingInput.value;

    if ( guessingInputValue >= 1 && guessingInputValue <= 50 ) {

        if ( guessingInputValue == randomNumber ) {

            alertMsg('<strong>!!! CONGRATS !!!</strong> You have discovered the number!');
            guessingBtn.disabled = true;
            guessingInput.value = '';

        } else {

            let isEven = randomNumber % 2 == 0;

            if ( guessingInputValue > randomNumber ) {

                alertMsg('The number is lower than '+guessingInputValue+' and is an '+( isEven ? 'even' : 'odd')+' number');
                attempts--;
                attemptsStr.innerHTML = attempts;
                guessingInput.value = '';

            } else {

                alertMsg('The number is higher than '+guessingInputValue+' and is an '+( isEven ? 'even' : 'odd')+' number');
                attempts--;
                attemptsStr.innerHTML = attempts;
                guessingInput.value = '';

            }

            if( attempts == 0 ) {

                alertMsg('Game Over! Your have runned out of attempts! The number was: '+randomNumber);
                guessingBtn.disabled = true;
                guessingInput.value = '';

            }

        }

    } else {
        guessingInputValue = '';
        alertMsg('Insert a number between 1 and 50!');
    }

}

document.getElementById("guessingBtn").addEventListener("click", guessNumber);