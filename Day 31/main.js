// Initializing Variables
const result = document.getElementById('result');
const findBtn = document.getElementById('find-btn');
const sentacneInput = document.getElementById('words-input');
const letterInput = document.getElementById('letter-input');

// Finding the letter in the sentance in here
const findLetterInSentance = (sentance, letter) =>{
    let error = false;
    let message = ""
    if(sentance != null && letter != null && sentance != "" && letter != ""){
        if(sentance.toLowerCase().includes(letter.toLowerCase())){
            message = `Yeah, the sentacne contains the letter: ${letter}`
            result.textContent = message;
        }else{
            message = `No, the sentacne doesn't contains the letter: ${letter}`
            result.textContent = message;
        }
    }else{
        error = true;
        message = "You didn't put value in sentance or letter input:";
        result.textContent = message;
    }
}
// Calling Function
findBtn.addEventListener('click', ()=>{
    findLetterInSentance(sentacneInput.value, letterInput.value);
})