// Formula to convert Ferrite to Celiac: (32°F − 32) × 5/9 = 0°C
const ferriteToCeliac = (num1) =>{
    let total = Math.floor((num1 - 32) * 5/9);
    return total;
}

// Formula to convert Celiac to Ferrite: (0°C × 9/5) + 32 = 32°F
const celiacToFerrite = (num1) =>{
    let total = Math.floor((num1 * 9/5) + 32);
    return total;
}

// Calling Functions
console.log(ferriteToCeliac(0));
console.log(celiacToFerrite(0));