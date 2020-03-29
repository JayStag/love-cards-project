/*Button and User Input Functionality. Two different actions:
Cupid Button generates a random number and pulls the data from the array at that number position.
Inspired Button user selects a number - and color and direction - and the number entered returns the data from the array at the number position.
*/

import { deck } from "./readings";
/* Variables */
var cupid = document.querySelector(".cupid"); 
var inspire = document.querySelector(".inspired"); 
var curCard = [];

init();

function init(){
  buttons();
}

/*Event handles for both buttons */
function buttons() {
  cupid.addEventListener('click', function(){
    draw();
  });
  inspire.addEventListener('click', function() {
    choice();
  });

}

/* function that generates a random number between 1 and 333*/  
function getRan() {
  var randNum = Math.floor(Math.random() * deck.length);
  return randNum;  
};

/* function that creates the reaading HTML */
function newHTML() {
  var html = document.querySelector(".reading__right").innerHTML = '<p class="reading__right--num">' + curCard.num + '</p><h2 class="heading-secondary reading-heading">' + curCard.title + '</h2><h3 class="heading-tertiary reading-tertiary">' + curCard.head + '</h3><p class="reading__right--text">' + curCard.desc + '</p><h3 class="heading-secondary reading-guidance">Guidance:</h3>' +  '<h3 class="heading-tertiary reading-guide">' + curCard.guide + '</h3><p class="reading__right--genie">&copy; Genie Joseph, PhD</p>';
  return html;
}

/* function that takes the random number and returns the data from the array at number position */
function draw() {
  var index = getRan();
  curCard = deck[index];
  newHTML();
};

/* function that takes user number input and returns the data from array at number position */
function choice() { 
  /* variable that stores user number input */
  var input = document.querySelector('#number').value;
  var regex = new RegExp(/[^0-9]/, 'g');
  curCard = deck[input]
  /*take input variable and check against array position */
  for(var i = 0; i < input.length; i++) {
    /*Checks to make sure it is a number and within the correct range */
    if(input.match(regex)) {  
      alert("Please enter a number");
    } else if(input < 1 || input > 333) {
      alert("Please enter a number between 1 and 333");
    } else {
      newHTML();
    }
  }
};

/* Code to handle Private Reading Submit Form -- won't work properly until site domain name is secured, site is hosted, and transactional mail service is set-up */

// const express = require('express');
// const sendMail = require('.mail')
// const log = console.log;
// const app = express();
// const path = require('path');
// const PORT = 8080;


// //Data parsing
// app.use(express.urlencoded({
//   extended:false
// }));
// app.use(express.json());


// app.post('/email', (req, res) => {
//   const { name, email } = req.body;
//   log("Data: ", req.body);
  
//   sendMail(name, email, function() {
//     if(err) {
//       res.status(500).json({ message: 'Internal Error' });
//     } else {
//       res.json({ message: "Email Sent" });
//     }
//   });
// });


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(PORT, () => log('Server is starting on PORT, ', 8080));

