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