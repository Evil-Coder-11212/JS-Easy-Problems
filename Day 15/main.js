const message = prompt("Type n/no to get a false value y/yes to get a true value");
const checker = (mess) => {
    if (mess === "n" || mess === "no") {
        return false;
    } else if (mess === "y" || mess === "yes") {
        return true;
    } else {
        let total = 'Invalid message';
        return total;
    }
}

console.log(checker(message));