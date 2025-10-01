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