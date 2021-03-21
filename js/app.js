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

// let score = []

let userName = prompt('What is your name?');
alert('welcome ' + userName + ' to my website :)');

// first quesion
let travelFunc = function(){let travelQuestion = prompt('Do you think i love travelling?');
  if(travelQuestion.toLowerCase() === 'yes')
  {
    console.log('That is right!');
    alert('That is right!');
  // score.push(5)
  }
  else if(travelQuestion.toLowerCase() === 'no')
  {
    console.log('I really love travelling!');
    alert('I really love travelling!');
  }
};

travelFunc();


// second quesion
function movieFunc(){let movieQuestion = prompt('Do you think i watch movies?');
  if(movieQuestion.toLowerCase() === 'yes')
  {
    console.log('I hope we can watch one together :)');
    alert('I hope we can watch one together :)');
  // score.push(5)
  }
  else if(movieQuestion.toLowerCase() === 'no')
  {
    console.log('Movies are exciting so i like them!');
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

// third quesion
let wakeupFunc = function(){let wakeupQuestion = prompt('Do you think i wakeup early?');
  if(wakeupQuestion.toUpperCase() === 'YES')
  {
    console.log('Wakingup early is useful!');
    alert('Wakingup early is useful!');
  // score.push(5)
  }
  else if(wakeupQuestion.toUpperCase() === 'NO')
  {
    console.log('I am active girl not lazy!');
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


// fourth quesion
let foodFunc = function(){let food = prompt('Do you think i like vegetables?');
  if(food.toLowerCase() === 'yes')
  {
    console.log('I eat lots of vegetables daily!');
    alert('I eat lots of vegetables daily!');
  // score.push(5)
  }
  else if(food.toLowerCase() === 'no')
  {
    console.log('vegetables are healthy , i like them!');
    alert('vegetables are healthy , i like them!');
  }
};

foodFunc();

// fifth question
let seasonFunc = function(){
  let season = prompt('Do you think i enjoy summer seoson?');
  if(season.toLowerCase() === 'yes')
  {
    console.log('IT is too hot , i prefer spring!');
    alert('I is too hot , i prefer spring!');
  }
  else if(season.toLowerCase() === 'no')
  {
    console.log('I really hate summer!');
    alert('I really hate summer!');
    // score.push(5)
  }
};

seasonFunc();


// let sum = 0;

// for(let d=0 ; d < score.length ; d++){
//   sum = sum + score[d];
//   alert(score);
// }

// let guess = prompt('Guess a number between 0-50 ,You have 4 attempts');

// let myNumb = '24';

// for(let i=0 ;i < 4 ; i++ ){
//   if(guess === myNumb){
//     alert('Correct, you win!!!');
//     break;
//   }

//   if (guess < myNumb) {
//     alert('Your guess is too low!');
//      prompt('Guess a number between 0-50 ,You have 4 attempts');

//   }
//   else if (guess > myNumb) {
//     alert('Your guess is too high!');
//      prompt('Guess a number between 0-50 ,You have 4 attempts');
//   }
// }
// alert('Thanks for playing, hope you enjoyed!');

// sixth question

let guessNumFunc = function(){
  let guess;
  let myNum = 24 ;
  let i;
  let attempt = 1;

  for(i=0;i<4; i++){
    guess = prompt('Guess a number between 0-50 this is attempt number ' + attempt);
    if(Number(guess)=== myNum){
      alert('Correct, you win!!!');
      break;
    }
    else if(Number(guess) < myNum){
      alert('Your guess is too low!');
      attempt = attempt + 1;

    }
    else if (Number(guess)>myNum){
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


// let guess = prompt('Guess a number between 0-50');
// let myNumb = '24';
// let tryCout;
// tryCout = 3;
// for(let i = 0; i < 4; i++){
//   if(guess === myNumb){
//     alert('Correct, you win!!!');
//     break;
//   }
//   else if (guess < myNumb) {
//     alert('Your guess is too low!');
//     guess = prompt('Guess a number between 0-50 ,You have ' + tryCout + ' attempts');
//   }
//   else {
//     alert('Your guess is too high!');
//     guess = prompt('Guess a number between 0-50 ,You have ' + tryCout + ' attempts');
//   }
//   tryCout--;
// }

alert('Lets paly a new game!');

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
// seventh question
function choiseFunc(){let numberOfIndex = 0;
  let choise = ['red' , 'pink' , 'yellow'];
  let ans;
  // let attemptChoise = 1;

  for(let i = 0 ; i< 6 ; i++){

    if(choise[numberOfIndex] === ans){
      break;
    }
    ans = prompt('Mention one of my favourite color');

    for(let h = 0 ; h < choise.length ; h++){

      if (ans === choise[h]) {
        alert('Bravoo!!');
        numberOfIndex = h;
        break;
      }
    }
  }
}
choiseFunc();
alert(`your score is ${score} out of 7`);
alert('hope you enjoyed '+userName+' !');

