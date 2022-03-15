// Initializing Variables 

const removingFalsyValues = (arr) =>{
    let falsyValue = false;
    let message = ""
    if(arr != null) {
        for(let i = 0; i<arr.length; i++){
            if(arr[i] == "" || arr[i] == false || arr == undefined || arr == 0 || arr == NaN || arr == 0){
                falsyValue = true;
                let total = arr.splice(1, 1);
                message = `Yeah, there was falsy value ${total}` 
            }
            else{
                    falsyValue = false;
                    message = "No, there was falsy value" 
            }
        }
    }else{
        return null;
    }  
    return message
}

// Calling Functions
console.log(removingFalsyValues(["", "", 0, "fndjf"]));