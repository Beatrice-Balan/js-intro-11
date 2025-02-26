const { CharacterHelper } = require('./../utils/CharacterHelper.js');



console.log('\n--------TASK01--------\n')

let r1 = Math.floor(Math.random() * 100) + 1;
let r2 = Math.floor(Math.random() * 100) + 1;
let r3 = Math.floor(Math.random() * 100) + 1;

let avg = ((r1 + r2 + r3) / 3).toFixed(2);

console.log(`The 3 random numbers are ${r1}, ${r2}, ${r3} and their average is ${parseFloat(avg)}.`);

console.log(avg >= 50); // result with only 2 decimals & no trailing .00 if result is integer



console.log('\n--------TASK02--------\n')

let ran1 = Math.floor(Math.random() * 3) + 1;
let ran2 = Math.floor(Math.random() * 3) + 1;
let ran3 = Math.floor(Math.random() * 3) + 1;

console.log(`The 3 random numbers are: ${ran1}, ${ran2} and ${ran3}.`);

if(ran1 === ran2 && ran2 === ran3) console.log('TRIPLE MATCH');
    else if(ran1 === ran2 || ran1 === ran3 || ran2 === ran3) console.log('DOUBLE MATCH');
        else console.log('NO MATCH');



console.log('\n--------TASK03--------\n')

function hasA(word) {
    return word.toLowerCase().includes('a');
}

console.log(hasA('Abracadabra'));
console.log(hasA('Hocus-pocus'));



console.log('\n--------TASK04--------\n')

function doubleOrTripleWord(word) {
    word = word.toString();
    return word.length % 2 === 0 ? word.repeat(3) : word.repeat(2);
}

console.log(doubleOrTripleWord('1'));
console.log(doubleOrTripleWord('20'));
console.log(doubleOrTripleWord('Turtles!'));



console.log('\n--------TASK05--------\n')

/*
Write a function named as firstWord() which takes a string word as an argument and returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

*/


function firstWord(string) {
    let words = string.split(/\s+/);
    if (words.length > 0) {
        return words[0];
    }
    return '';
}

console.log(firstWord('Hello World'));
console.log(firstWord(''));
console.log(firstWord('I like JavaScript, i think'));
console.log(firstWord(' '));


// is this one looking good if I only want to return alphabetical words and skip special characters and numbers?

function first_Word(string) {
    let letterWords = string.match(/[a-zA-Z]+/g);
    if(letterWords) {
        return letterWords[0];
} 
    return '';
}

console.log(first_Word('Took me a while to come up with this function'));
console.log(first_Word(''));
console.log(first_Word('/[Regex]/... too'));
console.log(first_Word(' '));
console.log(first_Word('911 Hello?'));
console.log(first_Word(' 1 ')); 

// BILAL:

const firstWord = str => {
    str = str.trim();
    const firstSpaceOfStr = str.indexOf(' ')
    const firstWord = str.slice(0, firstSpaceOfStr)
        return firstWord
    }

    console.log(firstWord('Hello World'));



console.log('\n--------TASK06--------\n')

/*
Write a function named as lastWord() which takes a string word as an argument and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

*/

function lastWord(string) {
    let letterWords = string.match(/[a-zA-Z]+/g);
    if(letterWords) {
        return letterWords.at(-1);
} 
    return '';
}

console.log(lastWord('Sometimes, JavaScript hurts my brain!!'))
console.log(lastWord(''))
console.log(lastWord(`What's funnier than 24?`))

// BILAL

const lastWord = str => {
    str = str.trim()
const lastSpaceOfStr = str.lastIndexOf(' ')
console.log(lastSpaceOfStr)
}

console.log(lastWord('I like javascript'))



console.log('\n--------TASK07--------\n')

/*
Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

*/

    function firstlastWord(string) {
        let stringT = string.trim();
        let words = stringT.split(' ');
        
        if(!stringT) return '';
        else if(words.length === 1) return words[0] + words[0];
        
        let firstW = words[0];
        let lastW = words[words.length - 1];
        
        return firstW + lastW;
    }
    
    console.log(firstlastWord('Hello World'));
    console.log(firstlastWord('Hello'));
    console.log(firstlastWord('Winter is Coming'));
    console.log(firstlastWord('')); 



console.log('\n--------TASK08--------\n')
/*
Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

*/

function startVowel(word) {
    return /^[aeiou]/i.test(word[0]);
}

console.log(startVowel('Alpaca'));
console.log(startVowel('Zebra'));



console.log('\n--------TASK09--------\n')
/*
Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

*/

function swap4(word) {
    if(word.length >= 8) {
        return word.slice(-4) + word.slice(4, - 4) + word.slice(0, 4)
    }
    return '';
}

console.log(swap4('1234middle4567'));
console.log(swap4('1234567'));

// BILAL

const swapFour = str => {
    str = str.trim()
    if(str.length >= 8) {
    const first4 = str.slice(0, 4);
    const middle = str.slice(4, -4);
    const last4 = str.slice(-4);
    
    return last4 + middle + first4;
    }
    return ''
}

console.log(swapFour('123456789'));
console.log(swapFour('                      '));
console.log(swapFour('abc'));
console.log(swapFour('1234middle4567'));



console.log('\n--------TASK10--------\n')
/*
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

*/

function swapFirstLastWord(words) {
    let firstW = words.slice(0, words.indexOf(' '));
    let lastW = words.slice(words.lastIndexOf(' ') + 1);
    let middleW = words.slice(firstW.length, words.lastIndexOf(' '));

    if(words.trim().indexOf(' ') === -1) return ''
    else return lastW + middleW + ' ' + firstW
}

console.log(swapFirstLastWord('Hello tomato and bye potato')); 
console.log(swapFirstLastWord('Hello'));
console.log(swapFirstLastWord('Potato Tomato'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(' Hello '));

// BILAL:

const swapFL = str => {
    str = str.trim();

    const first = str.slice(0, str.indexOf(' ')); // I
    const middle =  str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1) // like
    const last = str.slice(str.lastIndexOf(' ') + 1); // javascript

    return last + middle + first;
}

console.log(swapFL('I like javascript')); // javascript like I


console.log(swapFL('I like javascript')); // javascript like I
console.log(swapFL('I like javascript')); // javascript like I
console.log(swapFL('I like javascript')); // javascript like I
console.log(swapFL('I like javascript')); // javascript like I

