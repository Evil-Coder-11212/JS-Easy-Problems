// Initializing Variable
const submitBtn = document.getElementById('submit-btn');
const resultEl = document.getElementById('result');

const logic = () =>{
    // Initializing Variable
    const symbols = "-_"
    const passwordEl = document.getElementById('password-input');
    const emailEl = document.getElementById('email-input');
    const addressEl = document.getElementById('address-input');  
    if(passwordEl.value != null){ 
        if(passwordEl.value.length < 11 && passwordEl.value != symbols.includes("-")) {
            const message = "InCorrect!"
            resultEl.textContent = message;
        }else{
            const message = "Correct!"
            resultEl.textContent = message;
        }
    }
    return;    
}

// Calling Variables
submitBtn.addEventListener('click', ()=>{
    logic()
})