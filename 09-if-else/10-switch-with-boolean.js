// This is something NOT available in most or majority of otehr prog languages - Java, C#

const { getrabndomNumber, getRandomNumber } = require('./../utils/MathHelper.js');

let ran1 = getRandomNumber(-100, 100);
console.log(`Random number is ${ran1}`);

// switch

switch(true) {
    case ran1 > 0:
        console.log('Pos');
        break;
    case ran1 < 0:
        console.log('Neg');
        break;
    default:
        console.log('Neutral');
}


// if else
if(ran1 > 0) {
    console.log('Positive');
} else if(ran1 < 0) {
    console.log('Negative')
} else {
    console.log('Neutral')
}