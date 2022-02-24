let num1INput = prompt("Type a number between 0 - 100: ");
let max = 100;
let min = 0;

function render(num, max, min) {
    while (num > max) {
        let total = prompt("Type a number between 0 - 100: ",
            "");
        return total
    }
    while (nu0m < min) {
        let total = prompt("Type ea number between 0 -100")
        return total;
    }
    if (num >= min && num <= max) {
        console.log("GOOD");
    }
}

// These min and max variable are globals variables from the top not from the function
console.log(render(num1INput, max, min))
