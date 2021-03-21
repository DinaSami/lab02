'use strict';
let score = 0;
let userName = prompt('What is your name?').toUpperCase();
alert('welcome ' + userName + ' to my website :)');

let travelFunc = function () {
  let travelQuestion = prompt('Do you think i love travelling?');
  if (travelQuestion.toLowerCase() === 'yes' || travelQuestion.toLowerCase() === 'y') {
    alert('That is right!');
    score++;
  }
  else if (travelQuestion.toLowerCase() === 'no' || travelQuestion.toLowerCase() === 'n') {
    alert('I really love travelling!');
  }
};
travelFunc();

function movieFunc() {
  let movieQuestion = prompt('Do you think i watch movies?');
  if (movieQuestion.toLowerCase() === 'yes'|| movieQuestion.toLowerCase() ==='y') {
    alert('I hope we can watch one together :)');
    score++;
  }
  else if (movieQuestion.toLowerCase() === 'no' || movieQuestion.toLowerCase() === 'n') {
    alert('Movies are exciting so i watch them!');
  }
}
movieFunc();

let wakeupFunc = function () {
  let wakeupQuestion = prompt('Do you think i wakeup early?');
  if (wakeupQuestion.toUpperCase() === 'YES' || wakeupQuestion.toUpperCase() === 'Y') {
    alert('Wakingup early is useful!');
    score++;
  }
  else if (wakeupQuestion.toUpperCase() === 'NO' || wakeupQuestion.toUpperCase() === 'N') {
    alert('I am active girl not lazy!');
  }
};
wakeupFunc();

let foodFunc = function () {
  let food = prompt('Do you think i like vegetables?');
  if (food.toLowerCase() === 'yes' || food.toLowerCase() === 'y') {
    alert('I eat lots of vegetables daily!');
    score++;
  }
  else if (food.toLowerCase() === 'no' || food.toLowerCase() === 'n') {
    alert('vegetables are healthy , i like them!');
  }
};

foodFunc();

let seasonFunc = function () {
  let season = prompt('Do you think i enjoy summer seoson?');
  if (season.toLowerCase() === 'yes' || season.toLowerCase() === 'y') {
    alert('It is too hot , i prefer spring!');
    score++;
  }
  else if (season.toLowerCase() === 'no' || season.toLowerCase() === 'n') {
    alert('I really hate summer!');
  }
};
seasonFunc();

alert('Lets move to level 2 !');

let guessNumFunc = function () {
  let guess;
  let myNum = 24;
  let i;
  let attempt = 1;

  for (i = 0; i < 4; i++) {
    guess = prompt('Guess a number between 0-50 this is attempt number ' + attempt);
    if (Number(guess) === myNum) {
      alert('Correct, you win!!!');
      score++;
      break;
    }
    else if (Number(guess) < myNum) {
      alert('Your guess is too low!');
      attempt = attempt + 1;

    }
    else if (Number(guess) > myNum) {
      alert('Your guess is too high!');
      attempt = attempt + 1;
    }

    else {
      alert('Wrong enter a number');
      attempt = attempt + 1;
    }

  }
};
guessNumFunc();


alert('Lets move to level 3 !');

function choiseFunc() {
  let arrayQuestion = ['orange', 'apple', 'mango'];
  let correct = false;
  for (let i = 1; i <= 6; i++) {

    let q7 = prompt('Guess my favourite fruit').toLowerCase();
    for (let i = 0; i < arrayQuestion.length; i++) {
      if (q7 === arrayQuestion[i]) {
        correct = true;
        break;
      }
    }
    if (correct) {
      alert('correct!');
      score++;
      break;
    }
  }
}
choiseFunc();
alert(`your score is ${score} out of 7`);
alert('hope you enjoyed '+userName+' !');
