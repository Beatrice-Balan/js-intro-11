const { getRandomNumber } = require ('./../utils/MathHelper.js')
/* 
get a random number between -5 and 5
Find if numebr is positive, negative or Neutral

*/

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

// No curly Braces

if(ran1 > 0) console.log('Positive')
else if(ran1 < 0) console.log('negative')
else console.log('Neutral')

console.log('End of the program.')

// trnery -> you can have it on different lines for readability

let result1 = ran1 > 0 ? 'Positive' 
            : ran1 < 0 ? 'negative' 
            : 'Neutral';

console.log(result1)


