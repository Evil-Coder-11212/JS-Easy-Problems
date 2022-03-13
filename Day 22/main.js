// Initializing Variables 
const userFirstInput = prompt("Type a number to check if the last value is same")
const userSecondInput = prompt("Type another number to check if the last of value is same")

// Check if the number is same as the other number
const checkLastValue = (str1, str2) =>{
    let lastLetterIsSame = false;
    let message = ``
    if(str1 != null && str2 != null){
        if(str1[str1.length-1] == str2[str2.length-1]){
            message  = `Yeah, they are same by this number ${str1[str1.length-1]} ${str2[str2.length-1]}`
            lastLetterIsSame = true;
        }else{
            message  = `No, they are not same by this number  ${str1[str1.length-1]}  ${str2[str2.length-1]}`
            lastLetterIsSame = false;
        }
    }else{
        return;
    }
    return message;
}

// Calling Functions
console.log(checkLastValue(userFirstInput,userSecondInput));