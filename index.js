const prev=document.getElementById('previous')
const rem=document.getElementById('rem')
const inputEl=document.getElementById('input-el')
const msgEl=document.getElementById('message-el')
const instructions = document.getElementById('game-instructions')
let isAlive=false;
let gameStarted = false; 
let prevEl=[]
let msg=""
let n=Math.floor(Math.random()*100+1);
let max= 10;
const diffSelect = document.getElementById('difficulty-select')
const startBtn = document.getElementById('start-btn')
const submitBtn = document.getElementById('submit-btn');
rem.innerHTML+=max
let savedBestScore = localStorage.getItem('guessGame_best');
let savedTotalWins = localStorage.getItem('guessGame_wins') || 0;
let totalAllowedAttempts;

function updateStatsUI() {
  const bestScoreDisplay = document.getElementById('best-score');
  const totalWinsDisplay = document.getElementById('total-wins');
  
  if (bestScoreDisplay) {
    bestScoreDisplay.innerText = savedBestScore ? `${savedBestScore} tries` : '--';
  }
  if (totalWinsDisplay) {
    totalWinsDisplay.innerText = savedTotalWins;
  }
}

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

    let attemptsUsed = 10 - (max - 1);
     savedTotalWins = parseInt(savedTotalWins) + 1;
      localStorage.setItem('guessGame_wins', savedTotalWins.toString());
 
      if (savedBestScore === null || attemptsUsed < parseInt(savedBestScore)) {
        savedBestScore = attemptsUsed;
        localStorage.setItem('guessGame_best', attemptsUsed.toString());
      }
      updateStatsUI();
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
   n=Math.floor(Math.random()*100+1);
  max= 10;
  diffSelect.disabled = false;
  startBtn.disabled = false;
  inputEl.disabled = true;
  submitBtn.disabled = true;
  inputEl.placeholder = "Click Start Match first";
  instructions.textContent = "Choose a difficulty above and click 'START MATCH' to begin!";
  rem.innerHTML="Remaining Guesses: "+max
  prev.innerHTML="Previous Guesses: "
  msgEl.textContent=""
  inputEl.value=""
  updateStatsUI();
  
}
function lockAndStart(){
  
  diffSelect.disabled = true;
  startBtn.disabled = true;
  
  
  inputEl.disabled = false;
  submitBtn.disabled = false;
  inputEl.placeholder = "";
  inputEl.focus();
  
  isAlive = true;
  gameStarted = true;

  const chosenDifficulty = diffSelect.value;
  if (chosenDifficulty === "easy") {
           max = 15;
     } 
     else if (chosenDifficulty === "medium") {
     
    max = 10;
    
  } 
  else if (chosenDifficulty === "hard") {
    max = 7;
    
  }
  totalAllowedAttempts = max;
  rem.innerHTML = "Remaining Guesses: " + max;
  msgEl.textContent = "Match started! Good luck.";
}

