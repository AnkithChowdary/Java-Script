'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpen = document.querySelectorAll('.show-modal');
const btnsClosed = document.querySelector('.close-modal');

for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
btnsClosed.addEventListener('click', function (){
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
})