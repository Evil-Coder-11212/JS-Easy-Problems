const oddOrEven = (num) =>{
    let message  = ""
    if(num % 2 == 0){
        return message = "EVEN"
    }else if((num+1)){
        return message = "ODD"
    }else{
        return message = "Invalid Letter/Symbol Please Put An Number"
    }
}

console.log(oddOrEven(1));