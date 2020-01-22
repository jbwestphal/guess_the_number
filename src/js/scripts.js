'use strict';

let attempts = 5;
let randomNumber = Math.floor((Math.random() * 50) + 1);

const attemptsStr = document.getElementById('attempts');
const guessingInput = document.getElementById('guessingInput');
const guessingBtn = document.getElementById('guessingBtn');
const reloadBtn = document.getElementById('reloadBtn');

attemptsStr.innerHTML = attempts;
reloadBtn.style.visibility = "hidden";
reloadBtn.style.width = "100%";

const hiddenInput = (status) => {
    guessingInput.style.visibility = status;
    guessingBtn.style.visibility = status;
}

let alertMsg = message => {
    document.getElementById("alertMsg").innerHTML = message;
}

let guessNumber = () => {

    let guessingInputValue = guessingInput.value;

    if (guessingInputValue >= 1 && guessingInputValue <= 50) {

        if (guessingInputValue == randomNumber) {

            alertMsg('<strong>!!! CONGRATS !!!</strong> You have discovered the number!');
            guessingBtn.disabled = true;
            reloadBtn.style.visibility = "visible";
            guessingInput.value = '';
            hiddenInput("hidden");

        } else {

            let isEven = randomNumber % 2 == 0;

            if (guessingInputValue > randomNumber) {

                alertMsg('The number is lower than ' + guessingInputValue + ' and is an ' + (isEven ? 'even' : 'odd') + ' number');
                attempts--;
                attemptsStr.innerHTML = attempts;
                guessingInput.value = '';

            } else {

                alertMsg('The number is higher than ' + guessingInputValue + ' and is an ' + (isEven ? 'even' : 'odd') + ' number');
                attempts--;
                attemptsStr.innerHTML = attempts;
                guessingInput.value = '';

            }

            if (attempts == 0) {

                alertMsg('Game Over! Your have runned out of attempts! The number was: ' + randomNumber);
                guessingBtn.disabled = true;
                guessingInput.value = '';
                reloadBtn.style.visibility = "visible";
                hiddenInput("hidden");
            }

        }

    } else {
        guessingInputValue = '';
        alertMsg('Insert a number between 1 and 50!');
    }

}

let restartgame = () => {
    attempts = 5
    randomNumber = Math.floor((Math.random() * 50) + 1);
    attemptsStr.innerHTML = attempts;
    guessingInput.value = '';
    alertMsg('Insert a number between 1 and 50!');
    guessingBtn.disabled = false;
    reloadBtn.style.visibility = "hidden";
    hiddenInput("visible");
    document.getElementById("guessingBtn").addEventListener("click", guessNumber);
}


document.getElementById("guessingBtn").addEventListener("click", guessNumber);
document.getElementById("reloadBtn").addEventListener("click", restartgame);