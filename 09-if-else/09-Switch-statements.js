const { getRandomNumber } = require('./../utils/MathHelper.js')

let ran1 = getRandomNumber(1, 3);
console.log(`The random number is ${ran1}`)

// using IF ELSE
/*
if(ran1 === 1) {
    console.log('ONE')
} else if(ran1 === 2) {
    console.log('TWO')
} else {
    console.log('THREE')
}
*/

// USING SWITCH

switch(ran1) {
    case 1:
        console.log('ONE');
        break;
    case 2:
        console.log('TWO');
        break;
    default: 
        console.log('THREE')
}
