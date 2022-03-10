const input = prompt('Type your number here: ');
const bodyEl = document.body;

const repeatReturn = (num) =>{
    if(num < 0){
        bodyEl.innerText = "Negative"
    }else if(num > 0){
        bodyEl.innerText = "Positive"
    }else if(num === 0){
        bodyEl.innerText = "Zero"
    }else{
        bodyEl.innerText = "Invalid character you can only use numbers"
    }
}

repeatReturn(Number(input));