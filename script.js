'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Principais variáveis
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 0;
let highscore = 0;
let lifes = 5;

// Funções repetidas
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayLifes = function (lifes) {
  document.querySelector('.lifes').textContent = lifes;
};
const valueGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

// Adicionando uma função para evento de clique no botão "Tentar número!"
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Quando não tem input
  if (!guess) {
    displayMessage('⛔ No number!');

    // Quando o jogador ganha
  } else if (guess === secretNumber) {
    score++;
    displayMessage('🎉 Número correto!');
    displayNumber(secretNumber);
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Registrando o RECORDE quando ganhar
    if (highscore === 0) {
      highscore = score;
      displayHighscore(score);
    } else if (score < highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

    // Quando o jogador erra
  } else if (guess !== secretNumber) {
    if (score < 4) {
      displayMessage(
        guess > secretNumber ? '📈 Número maior!' : '📉 Número menor!'
      );
      score++;
      lifes--;
      displayScore(score);
      displayLifes(lifes);
    } else {
      displayNumber('X');
      displayMessage('☠️ Você perdeu!');
      displayScore(10);
      displayLifes(0);
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('h1').textContent = 'GAME OVER';
    }
  }
});

// Adicionando uma função para evento de clique no botão "RESETAR!"
document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  lifes = 5;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  displayMessage('Tente adivinhar! Digite um número no espaço ao lado e aperte o botão...');
  displayScore('-');
  displayNumber('?');
  valueGuess('');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '17rem';
  displayLifes(5);
});
