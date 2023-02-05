 // 1 + 2 + 3 + 4 + 5+ 6 + 7

function factorial(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;
        // console.log(i, sum);
    }
    return sum;
}

const result = factorial(9);
console.log(result);