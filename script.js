const MIN_NUM = 1;
const MAX_NUM = 10;

let score = 0;
const scoreEl = document.querySelector('#score');
updateScore(score);

let firstNum,secondNum = 0;

const firstNumEl = document.querySelector('#first-num')
const secondNumEl = document.querySelector('#second-num')

const form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const userInput = e.target.querySelector('.form__user-input');
  if(userInput.value == '') return;
  if(+userInput.value == firstNum * secondNum) {
    updateScore(++score);
  } else {
    updateScore(--score);
  }

  userInput.value = '';
  setNewValues(getRandomNumber(), getRandomNumber());
})

window.onload = () => {
  setNewValues(getRandomNumber(), getRandomNumber());
}

function setNewValues(newFirstValue, newSecondValue) {
  firstNum = newFirstValue;
  secondNum = newSecondValue;

  firstNumEl.textContent = firstNum;
  secondNumEl.textContent = secondNum;
}


function getRandomNumber() {
  return Math.floor((Math.random() * MAX_NUM)) + MIN_NUM;
}

function updateScore(newScore) {
  score = newScore;
  scoreEl.textContent = score;
}