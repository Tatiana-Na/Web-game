'use strict'

const btn = document.querySelector('.js-btn');


const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const numberOfGuesses = 0;

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }

btn.addEventListener('click', evt => {
    evt.preventDefault()   
});

const form = document.querySelector('.js-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
   event.preventDefault();
   console.log('input.value');
   input.value = '';
}

while (guess != randomNumber) {
    if (guess > randomNumber) {
        guess = form('Demasiado alto');  
        numberOfGuesses = numberOfGuesses +1;
}

if (guess < randomNumber) {
    guess = form('Demasiado bajo');  
    numberOfGuesses = numberOfGuesses +1;
}
}
 