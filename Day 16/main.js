const addbtn = document.getElementById('add-btn');
const reseatBtn = document.getElementById('reseat-btn');
const inputEl = document.getElementById('array-input');
const resultsEl = document.getElementById('results');
let array = [
    1,
    2,
    3,
    4,
    5
]

addbtn.addEventListener('click', () => {
    logic(inputEl.value);
});

reseatBtn.addEventListener('click', () => {
    array = [
        1,
        2,
        3,
        4,
        5
    ]
    resultsEl.innerText = array;
});

const logic = (input) => {
    if (input === "last" || input === "Last") {
        array.pop();
        resultsEl.innerText = array;
    } else if (input === "first" || input === "First") {
        array.shift();
        console.log(array);
        resultsEl.innerText = array;
    }
}

