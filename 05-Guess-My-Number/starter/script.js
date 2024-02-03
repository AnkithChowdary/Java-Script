'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
const displayMessage=function(message){
document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener
('click',function(){
  const guess=Number(document.querySelector('.guess').value);
if(guess===secretNumber){
document.querySelector('.message').textContent='Nice guess🥳';
document.querySelector('body').style.backgroundColor='green';
document.querySelector('.guess').value=secretNumber;
}
else if(!guess)
displayMessage('No number👎');
else if(guess<secretNumber)
displayMessage('Too low');
else
displayMessage('Too high');
})
document.querySelector('.again').addEventListener('click',function()
{
  document.querySelector('body').style.backgroundColor='Black';
  document.querySelector('.message').textContent='Start guessing..';
  document.querySelector('.guess').value='';
})
