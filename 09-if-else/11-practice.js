const date = new Date();

let dayOfTheWeek = date.getDay(); // 0 - sunday, 6 - saturday

/*
Program that tells if 
0 or 6 -> weekend
1-5 -> weekday
*/

if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log('Weekend!');
} else {
    console.log('Weekday');
}

// Ternary If Else

let result = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'Weekend' : 'Weekday';

// Switch

switch (true) {
    case dayOfTheWeek === 0 || dayOfTheWeek === 6:
        console.log('Weekend!');
        break;
    default:
        console.log('Weekday');
}

// or

switch (dayOfTheWeek) {
    case 0:
        console.log('Weekend!');
        break;
    case 6:
        console.log('Weekend!');
        break;
    default:
        console.log('Weekday');
}



/* WRONG
switch(dayOfTheWeek) {
    case 0 || case 6:            // WRONG, YOU CAN'T HAVE 2 CASES IN ONE LINE, SUE BOOLEAN
        console.log('Weekend!');
        break;
    default:
        console.log('Weekday');
}
*/


/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/

function startE(name) {
    return name.toLowerCase().startsWith('e');
}

console.log(startE(''));


//  if you want to use [] index

function startE(name) {
    return name.trim().length !== 0 && name[0].toLowerCase() === 'e';
}

console.log(startE(''));

/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

function divisible5(num) {
    return num % 5 === 0;
}

console.log(divisible5(10));

// arrow

const divisibleFive = num => num % 5 === 0;
console.log(divisibleFive(10));

/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'

*/

// option 1
function fooBar(num) {
    if (num % 5 === 0 && num % 7 === 0) {
        return 'foobar';
    } else if (num % 5 === 0) {
        return 'foo';
    } else if (num % 7 === 0) {
        return 'bar';
    }
    return num;
}

console.log(fooBar(2));
console.log(fooBar(5));
console.log(fooBar(7));
console.log(fooBar(70));


// option 2
function fooBar(num) {
    if (num % 5 === 0 && num % 7 === 0) return 'foobar';
    else if (num % 5 === 0) return 'foo';
    else if (num % 7 === 0) return 'bar';
    return num;
}

console.log(fooBar(2));
console.log(fooBar(5));
console.log(fooBar(14));
console.log(fooBar(35));


// you could use a number divisible by BOTH 5 and 7 
function fooBar(num) {
    if (num % (5 * 7) === 0) return 'foobar';
    if (num % 5 === 0) return 'foo';
    if (num % 7 === 0) return 'bar';
    return num;
}

console.log(fooBar(2));
console.log(fooBar(5));
console.log(fooBar(14));
console.log(fooBar(35));

// option 4

const fooBar = number => {
return number % (5 * 7) === 0 ? 'foobar'
: number % 5 === 0 ? 'foo'
: number % 7 === 0 ? 'bar'
: number;
}


let str = "abc42";
console.log(parseInt(str)); 