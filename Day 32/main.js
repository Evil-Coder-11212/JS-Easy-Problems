// Add a dash when there is an even number
const oppositeTheTypes = (num) =>{
    let total = "";
    let error = false;
    if(num != null){
        error = false;
        num.forEach((element=>{
            if(element % 2 == 0){
                total += `${element}-`
            }else{
                total += `${element}`
            }
        }))
    }else{
        total = "NaN or There is no value"
        error = true;
        return total;
    }
    return total
}

// Calling Function
console.log(oppositeTheTypes([1, 2, 4, 1, 3, 5]))