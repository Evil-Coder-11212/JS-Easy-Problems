// Initializing Variables 

/* 
    Converting str into arr and
    sorting it and reconverting it into a str and returning
*/
const orderingString = (str) =>{
    let total = "";
    if(str != null){
        let arr = Array.from(str)
        arr.sort();
        arr.forEach((element)=>{
            total += element;
        })
    }else{
        return null;
    }
    return total
}

// Calling Function
console.log(orderingString("Hello World"));