'use strict'

const btn = document.querySelector('.js-btn');


const guesses = 0;

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }

  const randomNumber = getRandomNumber(100);
  console.log(randomNumber);
  



/* const prompt = document.querySelector('.js-form');
prompt.addEventListener('submit', handleSubmit);
 function handleSubmit(event) {
    event.preventDefault();
    console.log('imput.value');
    imput.value = '';
 }
 */

btn.addEventListener('click', evt => {
    evt.preventDefault()
});
    console.log('click');


