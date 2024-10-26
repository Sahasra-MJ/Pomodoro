const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
let interval
let timeLeft = 1500;

function UpdateTimer(){
    let minutes= Math.floor(timeLeft/60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timerEl.innerHTML= formattedTime;
}


function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        UpdateTimer();
        if(timeLeft===0){
            clearInterval(interval);
            alert("Time's Up!");
            timeLeft= 1500;
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft=1500;
    UpdateTimer();
}

startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);


