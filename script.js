'use strict';
// console.log(document.querySelector('.message'));
var number = Math.trunc(Math.random() * 20) + 1;

let trying = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high';
    trying--;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too low';
    trying--;
  }
  document.querySelector('.score').textContent = trying;
  if (trying <= 0) {
    document.querySelector('.message').textContent = 'You Loser the game';
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  if (
    Number(document.querySelector('.highscore').textContent) <
    Number(document.querySelector('.score').textContent)
    //Number(document.querySelector('.highscore').textContent) === number
  ) {
    document.querySelector('.highscore').textContent = Number(
      document.querySelector('.score').textContent
    );
  } else {
    //document.querySelector('.highscore').textContent
  }
  trying = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = trying;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
