// Initializing Variables
const array = [
    1, 
    2,
    3, 
    4, 
    5
]

// 50 Or Not
const OrNot = (num1, num2, winningNumber) =>{
    let FivityOrNot = false;
    let message = ''
    if(num1 != null && num2 != null) {
        if(num1 === winningNumber || num2 === winningNumber || num1 + num2 === winningNumber){
            FivityOrNot = true;
            message = `Yeah, they are ${winningNumber}`
        }else{
            FivityOrNot = false;
            message = `No, they are not ${winningNumber}`
        }
    }else{
        return null;
    }
    return message;
}

// Giving the sliced array
const specificArrayIndex = (startIndex,endIndex, array) =>{
    let message = ""
    if(startIndex != null && endIndex != null & array != null){
        const total = array.slice(startIndex, endIndex);
        message = `This is the slice array ${total}`
        return message;
    }else{
        return null;
    }
}

const upperOrNot = (str) =>{
    const upperStr = str.toUpperCase();
    let message = ""
    if(str != null && str != ""  && str != " ") {
        if(str == upperStr){
            message = `Yeah, they all upper case ${str}`
        }else{
            message = `No, they all not upper case ${str}`
        }
    }else{
        return null;
    }
    return message;
}

// Calling Functions
console.log(`50 Or Not`)
console.log(OrNot(25, 35, 60));
console.log(`Write a JavaScript program to extract out the values at the specified indexes from a specified array?`)
console.log(specificArrayIndex(0, 1, array))
console.log(`Write a JavaScript program to check if a given string is upper case or not?`)
console.log(upperOrNot(" "));
