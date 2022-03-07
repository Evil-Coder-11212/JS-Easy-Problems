const nameUser = prompt('What is your name: ');
const age = prompt('What is your age: ');
const gender = prompt('What is your gender: ');
const obj = {
    name: nameUser,
    age: age,
    gender: gender
}

console.table(obj);
