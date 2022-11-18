"use strict";

//Elementos de html

const btn = document.querySelector(".js_button");
const userNumberInput = document.querySelector(".js_userNumber");
const tips = document.querySelector(".js_tips");
const numberOfTries = document.querySelector(".js_numberOfTries");

// Functiones
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
}
 

function checkNumber() {
    const userNumber = parseInt(userNumberInput.value);
    if( isNaN(userNumber)) {
        tips.innerHTML = "El número debe estar entre 1 y 100.!"
    }
    else if (userNumber > randomNumber) {
      tips.innerHTML = "Demasiado alto."; 
    }
    
    else if (userNumber < randomNumber) {
        tips.innerHTML = "Demasiado bajo."
    }
    
    else if (userNumber === randomNumber) {
        tips.innerHTML = "Has ganado campeona!!!"
    }
}; 


function incrementCounter() {
numberOfTriesCounter++ // numberOfTriesCounter +1
numberOfTries.innerHTML = numberOfTriesCounter;
};

function handleClick(ev) {
    ev.preventDefault();
    checkNumber();
    incrementCounter();
};



//Eventos 
btn.addEventListener("click", handleClick)

  //Main 
  let numberOfTriesCounter = 0;
  const randomNumber = getRandomNumber( 100 ); 
  console.log(randomNumber);
 