const arr1Mes = prompt("Type your array value 1 value here")
const arr2Mes = prompt("Type your array value 2 value here")

const biggestArray = (arr)=>{
    let total = "";
    const array1LengthSubtraction = arr[0].length - arr[1].length;
    const array2LengthSubtraction = arr[1].length - arr[0].length;
    if(arr[0].length> arr[1].length){
         total = `Array Value 1 Is Bigger Than Array 2 Value By ${array1LengthSubtraction}`
    }else if(arr[0].length< arr[1].length){
        total = `Array Value 2 Is Bigger Than Array 1 Value By ${array2LengthSubtraction}`
    }
    return total;
}

console.log(biggestArray([arr1Mes, arr2Mes]))