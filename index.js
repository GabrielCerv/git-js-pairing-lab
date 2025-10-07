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

//console.log(largest(30,30,1));

const absoluteNineteen = num => {
    // If the number is less than nineteen return the difference
    if (num <= 19) {
        return 19 - num;
    }
    //If not, return the difference times 3
    return (num - 19) * 3;
}

//console.log(absoluteNineteen(10));

const switchLetters = str => {
    // If the string has less than two characters, return the same string
    if (str.length < 2) {
        return str;
    }
    // Split the string into an array and store it into a new variable
    let newString = str.split('');
    // Switch the value of the first element of the array, to the value of the last element of the string
    newString[0] = str[str.length - 1];
    // Switch the value of the last element of the array, to the value of the first element of the string
    newString[str.length - 1] = str[0];
    // Join the array back up to a string and return it
    newString = newString.join('');
    return newString;
}

//console.log(switchLetters('hello world'));

const changeString = str => {
    let newString = '';
    let currentChar = '';
    for (let i = 0; i < str.length; i++) {
        // Get the ASCII number of the current character
        currentChar = str.charCodeAt(i);
        // If the character is 'z' add an 'a' to the string instead of using the next ASCII character
        if ( currentChar === 122) {
            newString += 'a'
        } // Add 1 to the current character, turning it into the following letter of the alphabet
        else {
            newString += String.fromCharCode(currentChar + 1);
        }
    } 
    return newString;
}

//console.log(changeString('helloworld'));
