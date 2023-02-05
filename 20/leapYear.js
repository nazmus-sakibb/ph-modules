function isLeapYear(year){
    const remainder = year % 4;

    if(remainder === 0){
        // console.log(`${year} is a Leap Year!`);
        return `${year} is a Leap Year!`;
    }
    else {
        // console.log(`${year} is not a Leap Year!`);
        return `${year} is not a Leap Year!`;
    }
}

const leapYear = isLeapYear(2042);
console.log(leapYear);