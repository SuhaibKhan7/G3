const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const dice=document.querySelector('.dice');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
const btnnew=document.querySelector('.btn--new');
let currentscore=0;
let activeplayer=0; //o or 1
let score;
let play=true;

let init=function()
{
 score=[0,0];
score0.textContent=0;
score1.textContent=0;


dice.classList.add('hidden');
}
init();


function switchPlayer()
{
currentscore=0;
console.log('hi');
document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
activeplayer=activeplayer==0?1:0;
document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
}

btnroll.addEventListener('click',function(){

if(play){
const imgurl=Math.trunc(Math.random()*6+1);
dice.classList.remove('hidden');
dice.src=`dice-${imgurl}.png`

if(imgurl!=1)
{
currentscore+=imgurl;
document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
}
else{
    switchPlayer();
}
}
})


btnhold.addEventListener('click',function()
{
if(play){
score[activeplayer]+=currentscore;
document.querySelector(`#score--${activeplayer}`).textContent=score[activeplayer];


if(score[activeplayer]>=20)
{
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    play=false;

}
else
{
    switchPlayer();
}

}

})
btnnew.addEventListener('click',function(e){

    init();

})