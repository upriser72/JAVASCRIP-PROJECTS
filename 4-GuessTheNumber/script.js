let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p =document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);

    });
}

function validateGuess(guess)
{
    //to check if the input is a valid number or not.
    if(isNaN(guess))
    {
        alert("Please enter a valid number.")
    }
    else if (guess<1)
    {
        alert("Please enter a number greater than 1.") 
    }
    else if (guess>100)
    {
        alert("Please enter a number lesser than 100.") 
    }
    else
    {
        prevGuesses.push(guess);
        if(numGuesses>10)
        {
            displayGuess(guess);
            displayMessage(`Game Over.The Number was ${randomNumber}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess)
{
    //to check the nature of the input guess.
    if(guess===randomNumber)
    {
        displayMessage("Voila!You Guessed it right.");
        endGame();
    }
    else if(guess<randomNumber)
    {
        displayMessage("The number is TOOO LOW");
    }
    else if(guess>randomNumber)
    {
        displayMessage("The number is TOOO HIGH");
    }
}

function displayGuess(guess)
{
    //display the input guessed by the userInput
    userInput.value=''
    guessSlot.innerHTML += `${guess} `
    
    remaining.innerHTML=`${11-numGuesses}`
    numGuesses++;
}

function displayMessage(message)
{
    //interacts with DOM to display the relevant messages.
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame()
{
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame()
{
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuesses=[]
        numGuesses=1
        remaining.innerHTML=`${11-numGuesses}`
        guessSlot.innerHTML=''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    });
}


 





