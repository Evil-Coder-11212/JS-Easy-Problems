let num1Input = prompt("Type Your First Number Here: ");
let num2Input = prompt("Type Your Second Number Here: ");

const findTheLargestNumber = (num1, num2) =>{
    if(num1 > num2){
        return alert("As we can see num1 is greater than num2")
    }else{
        return alert("As we can see num2 is greater than num1")
    }
}

console.log(findTheLargestNumber(num1Input, num2Input));