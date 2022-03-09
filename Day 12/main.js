const input = prompt('Type your number here: s');
const bodyEl = document.body;

const repeatReturn = (num) =>{
    if(num < 0){
        return bodyEl.innerText = "Negative"
    }else if(num > 0){
        return bodyEl.innerText = "Positive"
        return "positive"
    }else if(num === 0){
        return bodyEl.innerText = "Zero"
    }else{
        return bodyEl.innerText = "Invalid character you can only use numbers"
    }
}

console.log(repeatReturn(Number(input)));