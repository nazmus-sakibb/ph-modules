function isEven(number){
    const remainder = number % 2;
    if(remainder % 2 === 0){
        return `${number} is even number`;
        // return true;
    } else {
        return `${number} is odd number`;
        // return false;
    }
}


const checkNumber = isEven(43);
console.log(checkNumber);

// isEven(142);