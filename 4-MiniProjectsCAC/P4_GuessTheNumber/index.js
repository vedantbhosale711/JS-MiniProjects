let randomNumber = parseInt(Math.random()*100+1);

const submitButton = document.querySelector('.button');
const userInput = document.querySelector('#input');
const previousGuess = document.querySelector('.previous-guesses');
const remainingGuess = document.querySelector('.remaining-guesses');
const lowOrHigh = document.querySelector('#low-or-high');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submitButton.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert("Enter a valid number");
    }
    else{
        prevGuesses.push(guess);
        if(numGuesses>=10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess==randomNumber){
        displayMessage('You guessed it right');
        endGame();
    }
    else if(guess>randomNumber){
        displayMessage('Your guess is too high');
    }
    else{
        displayMessage('Your guess is too low');
    }
}
function displayGuess(guess){
    userInput.value='';
    previousGuess.textContent += `${guess} `;
    numGuesses++;
    remainingGuess.textContent = `Remaining guesses: ${11 - numGuesses}`;
}
function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`;
}
function newGame(){
    const newGameButton = document.querySelector('#newGame'); 
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuesses = [];
        numGuesses = 1;
        previousGuess.textContent = 'Previous Guesses:';
        remainingGuess.textContent = `Remaining guesses: 10`;
        userInput.removeAttribute('disabled');
        lowOrHigh.innerHTML = '';
        startOver.removeChild(p);
        playGame = true;
    });
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled',''); 
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start new game</h2>';
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
