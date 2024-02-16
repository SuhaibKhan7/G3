// let text=document.getElementById('message').textContent;
// console.log(text);

// document.getElementById('message').textContent='Game completed'

// document.querySelector('#message').textContent='Hi query selector'

let sNumber=Math.trunc(Math.random()*20)+1;
console.log(sNumber);

let soc=20;
let highsoc=0;

function guessTheGame()
{
 if(soc>0){
 let gNumber=document.querySelector('.guess').value;

  if(!gNumber)
  {
    document.querySelector('#message').textContent='👀 Choose Number'
  }

  else if (gNumber==sNumber)
  {
    document.querySelector('#message').textContent='✅ Game Completed';
    document.querySelector('body').style.backgroundColor="green";
    document.querySelector('.number').textContent=gNumber;

    if(soc>highsoc)
    {
      document.querySelector('.highscore').textContent=soc;
    }




  }

  else if(gNumber>sNumber)
  {
    soc--;
    document.querySelector('#message').textContent='⬆️ Too High';
    document.querySelector('.score').textContent=soc;
  }
  else if(gNumber<sNumber)
  {
    soc--;
    document.querySelector('#message').textContent='⬇️ Too Low';
    document.querySelector('.score').textContent=soc;
  }
//soc(if) ka bracket
} 
else{
document.querySelector('body').style.backgroundColor='red';
document.querySelector('#message').textContent='❌ Game Over';

}





//function ka bracket
}


function resetGame()
{
  soc=20;
  sNumber=Math.trunc(Math.random()*20)+1;
  document.querySelector('body').style.backgroundColor='#000';
  document.querySelector('.score').textContent=soc;
  document.querySelector('#message').textContent='Start guessing...';
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
}