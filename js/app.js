'use strict';

let userName = prompt('What is your name?');
alert('welcome ' + userName + ' to my website :)');

// first quesion

let travelQuestion = prompt('Do you think i love travelling?');
if(travelQuestion.toLowerCase() === 'yes')
{
  console.log('That is right!');
  alert('That is right!');
}
else if(travelQuestion.toLowerCase() === 'no')
{
  console.log('I really love travelling!');
  alert('I really love travelling!');
}

// second quesion

let movieQuestion = prompt('Do you think i watch movies?');
if(movieQuestion.toLowerCase() === 'yes')
{
  console.log('I hope we can watch one together :)');
  alert('I hope we can watch one together :)');
}
else if(movieQuestion.toLowerCase() === 'no')
{
  console.log('Movies are exciting so i like them!');
  alert('Movies are exciting so i watch them!');
}

// third quesion

let wakeupQuestion = prompt('Do you think i wakeup early?');
if(wakeupQuestion.toUpperCase() === 'YES')
{
  console.log('Wakingup early is useful!');
  alert('Wakingup early is useful!');
}
else if(wakeupQuestion.toUpperCase() === 'NO')
{
  console.log('I am active girl not lazy!');
  alert('I am active girl not lazy!');
}

// fourth quesion

let food = prompt('Do you think i like vegetables?');
if(food.toLowerCase() === 'yes')
{
  console.log('I eat lots of vegetables daily!');
  alert('I eat lots of vegetables daily!');
}
else if(food.toLowerCase() === 'no')
{
  console.log('vegetables are healthy , i like them!');
  alert('vegetables are healthy , i like them!');
}

// fifth question

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
}

alert('I wish you enjoy my game ' + userName);
