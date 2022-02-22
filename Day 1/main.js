// ES5 function
function minutesToSecondes(minutes){
    let secondes = 60;
    let total = minutes * secondes;
    return total;
}

console.log("Starts ES5 function");
console.log(minutesToSecondes(3));
console.log("Ends ES5 function");
// ES6 function
let minutesToSecondesInArrow = (minutes) => {
    let secondes = 60;
    let total = minutes * secondes;
    return total;
}
console.log("Starts ES6 function");
console.log(minutesToSecondes(3));
console.log("Ends ES6 function");
