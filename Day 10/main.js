const firstLetterlowercase = (str) => {
    let firstLetter = str.slice(0, 1).toLowerCase();
    let allLetters = str.slice(1, str.length)
    let total = `${firstLetter}${allLetters}`
    return total;
}

console.log(firstLetterlowercase("HELLO WORLD"));
