function evenOdd(number) {
    if(number % 2 === 0) {
        return 'EVEN';
    }
}

console.log(evenOdd(2)); // EVEN
console.log(evenOdd(3)); // undefined - if you don't provide the alternative

function evenOdd(number) {
    if(number % 2 === 0) {
        return 'EVEN';
    } else {
        return 'ODD';
    }
}

console.log(evenOdd(3)); // ODD

// you don't even need to put the "else", just put the 2nd return:

function evenOdd(number) {
    if(number % 2 === 0) {
        return 'EVEN';
    }
        return 'ODD';
}

// even shorter:

function evenOdd(number) {
  return number % 2 === 0 ?'EVEN' : 'ODD';
}

/*
if numebr is pos return Positive, if neg then negative, or Neutral
*/

// function declaration
function posNegZero(number) {
    return number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero'
}

// ARROW function
const posNegZero = (number) => number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero';

console.log(posNegZero(0))
console.log(posNegZero(-1))
console.log(posNegZero(1))

