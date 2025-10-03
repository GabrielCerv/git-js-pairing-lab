//Code your solutions in this file

const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}

//fiveToOneHundred() tested(correct)

const multiplesOfThree = () => {
    for (let i = 3; i < 100; i += 3) {
        console.log(i);
    }
}

//multiplesOfThree();

const multiplesOfThreeOrFive = () => {
    for (let i = 3; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
}
// multiplesOfThreeOrFive();

const untilNum = num => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}

//untilNum(42);
const multiply = (num, num2) => num * num2;

//console.log(multiply(3, 7.5))

const add = (num, num2) => {
    if (num === num2) {
        return (num + num2) * 3;
    }
    return num + num2;
}

//console.log(add(5,5));
// true if num is negative 
const isNegative = num => {
    if (num < 0) {
        return true;
    } else if (num > 0) {
        return false;
    }
}
//console.log(isNegative(Math.PI));

const triangleArea = (base, height) => (base * height) / 2;

//console.log(triangleArea(6, 8));

const betweenTwentyAndForty = num => {
    if (num > 20 && num < 40) {
        return true
    } return false
}
//console.log(betweenTwentyAndForty(40));

const largest = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } return num3;
}
//console.log(largest(30,30,1));





















































//Write a function printTime that prints out the current time in the format HH:MM:ss. Do not hard code the hour, minute, or seconds values.
//getHours()
// getMinutes()
// getSeconds()
const printTime = () => {
    const time = new Date();
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    console.log(hours)
    console.log(minutes)
    console.log(seconds)
    console.log(`${hours - 12} : ${minutes} : ${seconds}`)
}
//console.log(new Date());
//printTime();


const isLeapYear = (year) => {
    if (year % 400 === 0) {
        return true
    } else if (year % 100 === 0) {
        return false
    } else if (year % 4 === 0) {
        return true
    } else {
        return false
    }
}
//console.log(isLeapYear(1999));

const getExtention = (fileName) => {
    let len = fileName.length
    for (let i = 0; i <= len - 1; i++) {
        if (fileName[i] === '.') {
            console.log(fileName.slice(i))
        }
    }
}
//getExtention("hello.txt");

