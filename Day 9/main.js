// converting string into array to loop through
const randomLetterAndNumbers = Array.from("0A1B2C3D4E5F6789");
let container = document.getElementById("color-code");
const hexText = document.getElementById('hex-code');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
    generatedRandomHexCode();
});

// Generating Random HEX Code
const generatedRandomHexCode = () => {
    let HEXCode = "";
    for (let i = 0; i <= 5; i++) {
        HEXCode += randomLetterAndNumbers[generateRandom()];
    }
    let total = `#${HEXCode}`
    container.style.backgroundColor = `${total}`
    hexText.textContent = `${total}`
}


// Generating A Random Number
const generateRandom = () => {
    const total = Math.floor(Math.random() * 5);
    return total;
}

generatedRandomHexCode();