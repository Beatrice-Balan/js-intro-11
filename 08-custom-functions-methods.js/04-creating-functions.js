// 1. Function Declaration - traditional way

function sum1(num1, num2) {
    return num1 + num2;
}
console.log(sum1(1,2));

//2. Function expressions

const sum2 = function (num1, num2) {
    return num1 + num2;
}

console.log(sum2(1,2)); //

//3. Arrow Functions - ES6 feature

const sum3 = (num1, num2) => {
    return num1 + num2
}

console.log(sum3(5,3));

const isEven = (number) => number % 2 === 0;
//            argument in pharantesis

console.log(isEven(3));
console.log(isEven(2));


/* CREATE 3 versions of this function, traditional

isWin()
Takes 2 number arguments and returns true if both numbers are positive, else it will return false

*/

// TRADITIONAL

function isWin1(num1, num2) {
    return num1 > 0 && num2 > 0;
}
console.log(isWin1(1, -2));

// function Expression

const isWin2 = function (num1, num2) {
    return num1 > 0 && num2 > 0;
};

console.log(isWin2(-1, 2));

// Arrow

const isWin3 = (num1, num2) => num1 > 0 && num2 > 0;
console.log(isWin3(1, 0));

/*
Write a function  called tehEnd
Takes 2 args/ param called str, bool
if bool is true return the first letter from the string 
if bool is false, return last letter
*/

function theEnd(str, bool) {
    if (bool) {
        return str[0];
    } 
    else {
        return str.at(-1)
    }
}

console.log(theEnd('Hello', true));
console.log(theEnd('Hello', false))














