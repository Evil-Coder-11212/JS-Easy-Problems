
const removeBtn = document.getElementById('btn');
const randomGenerator = () => {
    let total = Math.floor(Math.random() * 10);
    return total;
}

let randomAlphabet = "ra1bcd3ef2g4h6i6jk8l7m9no0pq10rstuvwxyz"

let total = ""

const randomAlphabets = () => {
    for (let i = 0; i < 7; i++) {
        total += randomAlphabet[randomGenerator()];
    }
}

randomAlphabets();

removeBtn.addEventListener('click', () => {
    let removeEl = prompt(`Which property you want to remove type ${total}  or  ${total} if you want to remove age`)
});
