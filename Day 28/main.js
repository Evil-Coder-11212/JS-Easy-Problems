// Initializing Variables
const startingInput = document.getElementById('starting-slice');
const endingInput = document.getElementById('ending-slice');
const sliceBtn = document.getElementById('slice-btn');
console.log(endingInput);
const resultEl = document.getElementById('results');
const array = [
    [
        1, 
        3, 
        2, 
        4, 
        5
    ],
    [
        8,
        3,
        4
    ],
    [
        8,
        9,
        5
    ],
    [
        1,
        3,
        4
    ]    
]

// Return the sliced arr+
const arraySlicing = (startingIndex, endingIndex, arr) =>{
    let total;
        if(startingIndex != null && endingIndex != null && arr != null) {
            total = randomArray(arr).slice(startingIndex, endingIndex);
        }else{
            return null
        }
    resultEl.textContent = total;
}


// Generateinreturn g A Random Array from array
const randomArray = (arr) =>{
    if(arr != null){
        let randomNumber = Math.floor(Math.random()*3);
        let total = arr[randomNumber]
        return total;
    }else{
        return null;
    }
}


// Calling Functions
sliceBtn.addEventListener('click', ()=>{
    arraySlicing(Number(startingInput.value),Number(endingInput.value),array);
})
