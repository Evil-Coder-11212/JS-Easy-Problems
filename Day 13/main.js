// Random Number Function and button click
const guessBtn = document.getElementById('guess-btn');
const randomNumber = () =>{
    let total = Math.floor(Math.random()*100)+1;
    guessBtn.addEventListener('click', ()=>{
        const inputEl = document.getElementById('guess-input');
        if(inputEl.value == total){
            timeEl.innerText = countDown;
            timeEl.textContent = "Correct"
            countDown = 10;
            total = Math.floor(Math.random()*100)+1;
        }else{
            timeEl.innerText = countDown;
            timeEl.textContent = "InCorrect"
            countDown = 10;
            total = Math.floor(Math.random()*100)+1;
        }
    });
    return total;
}

// Calling Functions
randomNumber();

// Timer Function and the logic
const timeEl = document.getElementById('timer');
let countDown = 10;
const timer = () =>{
    setInterval(() => {
    timeEl.innerText = countDown;
    if(countDown <= 10){
        countDown--
    }
    if(countDown === 0){
        countDown = 10;
        randomNumber();
    }
}, 1000)
}

// Calling Functions
timer();