'use strict';
const newB = document.querySelector('.btn--new');
const Roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dicel = document.querySelector('.dice');
const Cscore = document.getElementById('current--0');
const Cscore1 = document.getElementById('current--1');
const Fplayer0 = document.querySelector('.player--0');
const Fplayer1 = document.querySelector('.player--1');

let player = 1;
const bothScore = [0, 0];
let activePlayer = 0;
let currentscore = 0;
let playing = true;

const initial = function () {
  Fplayer0.classList.add('player--active');
  Fplayer1.classList.remove('player--active');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  dicel.classList.add('hidden');
  activePlayer = 0;
  currentscore = 0;
  playing = true;
  bothScore[0] = 0;
  bothScore[1] = 0;
};

initial();

const switchPlayer = function () {
  currentscore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  Fplayer0.classList.toggle('player--active');
  Fplayer1.classList.toggle('player--active');
};

Roll.addEventListener('click', function () {
  if (playing) {
    const rdice = Math.trunc(Math.random() * 6) + 1;
    dicel.classList.remove('hidden');
    dicel.src = `dice-${rdice}.png`;

    if (rdice !== 1) {
      currentscore += rdice;
      document.getElementById(`current--${activePlayer}`).textContent = currentscore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    bothScore[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent = bothScore[activePlayer];

    if (bothScore[activePlayer] >= 15) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newB.addEventListener('click', function () {
  initial();
  
  
});
