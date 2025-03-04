const { getRandomNumber } = require('./../utils/MathHelper.js')

// generate a random number until you reach gameNumber, then break the loop
let gameNumber = 5;
let attempts = 0;
let randomNumber;
/*
for( ; ; ) {
    let randomNumber = getRandomNumber(1, 10);
    attempts++;

    if(randomNumber === gameNumber) {
        break;
    }
}
*/

// USE WHILE... LOOP

while(randomNumber !== gameNumber) {
    randomNumber = getRandomNumber(1, 10);
    attempts++;
}

let time = attempts === 1 ? 'time' : 'times'
console.log(`Game is over after ${attempts} ${time}!`)

// keep generating a random number between 1-15 (inclusive) until you get lucky number = 13

let ran; // undefined
let countAttempt = 0;

do{
   ran = getRandomNumber(1, 15);
   countAttempt++;
} while(ran !== 13)

console.log(`We got lucky number 13 after ${countAttempt} times.`);

