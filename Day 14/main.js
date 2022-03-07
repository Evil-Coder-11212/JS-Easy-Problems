const btnEl = document.getElementById('submit-btn');
const inputsEl = document.querySelectorAll('.inputs');

btnEl.addEventListener('click', () => {
    random(Number(inputsEl[0].value), Number(inputsEl[1].value));
})

const random = (min, max) => {
    let total = Math.floor(Math.random() * (max - min + 1)) + min;
    return btnEl.innerText = total;
}

setInterval(() => {
    setTimeout(() => {
        btnEl.innerText = "Show"
    }, 1000);
}, 5000);
