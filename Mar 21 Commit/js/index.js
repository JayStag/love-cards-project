/*Button and User Input Functionality. Two different actions:
Cupid Button generates a random number and pulls the data from the array at the number position.
Inspired Button user selects a number - and color and direction - and the number entered returns the data from the array at the number position.
Example (for both) number is 1 - either random or entered, returns reading 01 
Start the array from positon 1 so the numbers match with the readings number*/

import { deck } from "./readings";


/* CUPID BUTTTON */

/* function that generates a random number between 1 and 333*/  
function getRan(min, max) {
  var min = 1;
  var max = 333;
  const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randNum;
  
};
  /* Event handler for cupid button click */
const btn = document.querySelector(".cupid"); 
btn.addEventListener('click', draw);
  
  /* function that takes the random number and returns the data from the array at number position */
  function draw() {
    
    const index = getRan();
    const curCard = deck[index];

    document.querySelector(".reading__right").innerHTML = '<p class="reading__right--num">' + curCard.num + '</p><h2 class="heading-secondary reading-heading">' + curCard.title + '</h2><h3 class="heading-tertiary reading-tertiary">' + curCard.head + '</h3><p class="reading__right--text">' + curCard.desc + '</p><h3 class="heading-tertiary reading-guide">' + curCard.guide + '</h3><p class="reading__right--genie">&copy; Genie Joseph, PhD</p>';
  };

/* INSPIRED BUTTON */

/* Event handler for inpsired button click */
const button = document.querySelector(".inspired"); 
button.addEventListener('click', choice);

/* function that takes user number input and returns the data from array at number position */
function choice() {

  /* variable that stores user number input */
  const input = document.querySelector('#number').value;

  /*take input variable and check against array position */
  const curCard = deck[input];

  /* variable for inserting array data into HTML */
  const reading = document.querySelector(".reading__right").innerHTML = '<p class="reading__right--num">' + curCard.num + '</p><h2 class="heading-secondary reading-heading">' + curCard.title + '</h2><h3 class="heading-tertiary reading-tertiary">' + curCard.head + '</h3><p class="reading__right--text">' + curCard.desc + '</p><h3 class="heading-tertiary reading-guide">' + curCard.guide + '</h3><p class="reading__right--genie">&copy; Genie Joseph, PhD</p>';

  /*variable to check for an integer for user input */
  let regex = new RegExp(/[^0-9]/, 'g');
  
  /*Check to verify that the user entered a number within the determined range*/

  /* Can't get this first part to work. If input is a letter or anything other than a number, code throws an error: index.js:63 Uncaught TypeError: Cannot read property 'num' of undefined
    at HTMLButtonElement.choice (index.js:63)*/
  if(input.match(regex)) {  
    alert("Please enter a number");
  } else if(input < 1 || input > 333) {
    alert("Please enter a number between 1 and 333");
  } else {
    return reading;
  }
  
};

    
