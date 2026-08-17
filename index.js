const prev=document.getElementById('previous')
const rem=document.getElementById('rem')
const inputEl=document.getElementById('input-el')
const msgEl=document.getElementById('message-el')
let isAlive=true;
let prevEl=[]
let msg=""
let n=Math.floor(Math.random()*100+1);
let max= 10;
rem.innerHTML+=max
function submit()
{ if(isAlive)
{
  prevEl.push(inputEl.value);
  prev.innerHTML="Previous Guesses: ";
  for(let i=0;i<prevEl.length;i++)
  {
    prev.innerHTML+=prevEl[i]+", ";
  }
  if(inputEl.value==n)
  {
    msg="<b>✌️✌️✌️You guessed the right number ✌️✌️✌️</b>";
    msgEl.innerHTML=msg;
    isAlive=false;
  }
  else if(inputEl.value<n)
  {
    msg="Your guess is too low";
    msgEl.textContent=msg;
  }
  else if(inputEl.value>n)
  {
    msg="Your guess is too high";
    msgEl.textContent=msg;
  }
  max=max-1;
    rem.innerHTML="Remaining Guesses: "+max;
    if(max==0)
    {
      msg="You have lost the game... The number was "+n+". Better luck next time";
      msgEl.innerHTML=msg;
      isAlive=false;
    }
     inputEl.value=""
}
}

function restart(){
  isAlive=true;
  prevEl=[]
  msg=""
  let n=Math.floor(Math.random()*100+1);
  max= 10;
  rem.innerHTML="Remaining Guesses: "+max
  prev.innerHTML="Previous Guesses: "
  msgEl.textContent=""
  inputEl.value=""
  
}