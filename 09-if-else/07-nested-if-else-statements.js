const { getRandomNumber } = require ('./../utils/MathHelper.js')
/* 
get a random number between -5 and 5
Find if numebr is positive, negative or Neutral

*/

// LADDER statement - preferred solution
let ran1 = getRandomNumber(-5, 5);
console.log(`The random number is ${ran1}`)

if(ran1 > 0) {
    console.log('Positive')
}
else if(ran1 < 0) {
    console.log('negative')
}
else {
    console.log('Neutral')
}

console.log('End of the program.')


// Nested if-else

if(ran1 > 0) {
    console.log('Positive');
}
else {
    if(ran1 < 0) {
        console.log('Negative');
    }
    else {
        console.log('neutral');
    }
}

if(ran1 === 0) {
    console.log('neutral')
}
else {
    if(ran1 < 0) {
        console.log('NEG');
    }
    else {
        console.log('POS');
    }
}