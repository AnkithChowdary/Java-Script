'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
let c = 0;
let hs = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  c++;

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Nice guess🥳';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.guess').value = secretNumber;
    let sc = Number(document.querySelector('.score').textContent=20 - c + 1);
    c=0;
  } else if (!guess) {
    displayMessage('No number⛔');
  } else if (guess < secretNumber) {
    displayMessage('📉Too low');
  } else {
    displayMessage('📈Too high');
  }
})

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.guess').value = '';
  let currentScore = Number(document.querySelector('.score').textContent);
  
  if (currentScore > hs) {
    hs = currentScore;
    document.querySelector('.highscore').textContent = hs;
  }
  
  document.querySelector('.score').textContent = 0;
})
