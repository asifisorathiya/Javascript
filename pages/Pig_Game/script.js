"use strict";

////elements
const player1ScoreEl = document.querySelector("#score--0");
const player2ScoreEl = document.querySelector("#score--1");
const player1CurrScoreEl = document.querySelector("#current--0");
const player2CurrScoreEl = document.querySelector("#current--1");

const diceImage = document.querySelector(".dice");

//variables
let activePlayer = 0,
  player1Score = 0,
  player2Score = 0,
  player1CurrScore = 0,
  player2CurrScore = 0,
  currScore = 0;

const init = function () {
  console.log("inti");
  (activePlayer = 0),
    (player1Score = 0),
    (player2Score = 0),
    (player1CurrScore = 0),
    (player2CurrScore = 0),
    (currScore = 0);

  player1ScoreEl.textContent = player1Score;
  player2ScoreEl.textContent = player2Score;
  player1CurrScoreEl.textContent = player1CurrScore;
  player2CurrScoreEl.textContent = player2CurrScore;
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");

  diceImage.classList.add("hidden");
};

//initiliase
init();

//on roll click
document.querySelector(".btn--roll").addEventListener("click", function () {
  let currScore = Math.trunc(Math.random() * 6) + 1;
  diceImage.classList.remove("hidden");
  diceImage.src = `dice-${currScore}.png`;

  if (activePlayer === 0) {
    player1CurrScore += currScore;
    player1CurrScoreEl.textContent = player1CurrScore;
  } else {
    player2CurrScore += currScore;
    player2CurrScoreEl.textContent = player2CurrScore;
  }

  if (currScore === 1) {
    switchPlayer();
  }

  console.log("dice" + currScore);
});

///switch player when 1 comes in dice
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  if (activePlayer === 0) player1CurrScore = 0;
  else player2CurrScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

//on hold click
document.querySelector(".btn--hold").addEventListener("click", function () {
  if (activePlayer === 0)
    player1ScoreEl.textContent =
      Number(player1ScoreEl.textContent) + Number(player1CurrScore);
  else
    player2ScoreEl.textContent =
      Number(player2ScoreEl.textContent) + player2CurrScore;
  switchPlayer();
  if (player1ScoreEl.textContent >= 20) {
    alert("player 1 wins");
    //init();
  }

  if (player2ScoreEl.textContent >= 20) {
    alert("player 2 wins");
    //init();
  }
});

//on new click
document.querySelector(".btn--new").addEventListener("click", init);
