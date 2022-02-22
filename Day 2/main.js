function taker(str){
    let firstThreeChar = str.slice(0, 3);
    let lastThreeChar = str.slice(str.length - 3);
    let total = firstThreeChar + lastThreeChar;
    if(str.length >= 3){
        return total;
    }else{
        let errorMessage = "sorry, you have to pass more than three character";
        return errorMessage;
    }
}
