'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)

  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




window.onload=logIn();

const storedName
function logIn()
{
const usrname=document.getElementById('username').value;




}





// const message=document.createElement('h1');
// message.textContent="welcome";
// const header=document.querySelector('.header');
// header.before(message);

// let randNo=(min,max)=>Math.floor(Math.random()*(max-min)+1);
// let randColor=()=>`rgb(${randNo(0,255)}, ${randNo(0,255)}, ${randNo(0,255)})`;

// document.querySelectorAll('.nav__link').forEach(element=>{

//   element.addEventListener('click',function(e)
//   {
//     this.style.backgroundColor=randColor();

//   })
// });
















// array.forEach(element => {
  
// });
// .addEventListener('click',function(){
// this.style.backgroundColor=randColor();
// })

// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor=randColor();
//   e.stopPropagation();
//   })
//   document.querySelector('.nav').addEventListener('click',function(e){
//     this.style.backgroundColor=randColor();

//     })

//     document.querySelector('body').addEventListener('click',function(){
//       this.style.backgroundColor=randColor();
//       })