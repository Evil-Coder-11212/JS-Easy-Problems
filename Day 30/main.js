// Initializing Variables
const result = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');
const wordsEl = document.getElementById('words-input');

// Capitializing the first letter of words
const firstLetterCapitialize = (str) =>{
    let array = str.split(" ");
    let total = ""
    if(str != null){
        array.forEach((element =>{
            let firstLetterUpper = element.slice(0, 1).toUpperCase()
            let wholeLetterLower = element.slice(1, element.length).toLowerCase()
            total += `${firstLetterUpper}${wholeLetterLower} `
        }))
        result.textContent = total;
    }else{
        return null;
    }
}

// Calling Function
convertBtn.addEventListener('click', ()=>{
    firstLetterCapitialize(wordsEl.value)
})