const { getRandomNumber } = require('./../utils/MathHelper.js')

/*
Task01

Requirement:
Assume you are given 2 numbers to be 0 or 1.
Print true if they are same number.
Otherwise, print false

Test data 1: 0, 1
Expected result 1: false

Test data 2: 0, 0
Expected result 2: true

Test data 3: 1, 0
Expected result 3: false

Test data 4: 1, 1
Expected result 4: true
*/

let num1 = getRandomNumber(0, 1);
let num2 = getRandomNumber(0, 1);

console.log(num1, num2);

console.log(num1 === num2);

/* Task02

Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"

Test data 1: "v"
Expected result 1:
"v"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 3: "$"
Expected result 3:
INVALID INPUT
*/

/// IDK SOMETHING WRONG HERE
let char2 = '7';

let char2Code = char2.charCodeAt(2);

if(char2Code >= 47 && char2Code <= 57) {
    console.log(`${char2} is a digit`)
} 
else if ((char2Code >= 65 && char2Code <= 90) || (char2Code >= 97 && char2Code <= 122)) {
    console.log(`${char2} is a letter`)
}
else {
    console.log('Invalid input')
}


/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1: "a"
Expected result 1:
"a" is a lowercase letter

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N" is an uppercase letter

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/

let char3 = 'J';

let char3Code = char3.charCodeAt(0)

if(char3Code >= 65 && char3Code <= 90) {
    console.log(`${char3} is a Uppercase letter`)
} 
else if(char3Code >= 97 && char3Code <= 122) {
    console.log(`${char3} is a lowercase letter`)
} 
else {
    console.log('INVALID INPUT')
}

/*
Task04

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.
Special character: except space, letters, digits

Test data 1: "a"
Expected result 1:
"a" is not a special 
character

Test data 2: "5"
Expected result 2:
"5" is not a special 
character

Test data 3: "$"
Expected result 3:
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is not a special character
*/

let char4 = ' ';

let char4Code = char4.charCodeAt(0);

if(char4 === 32 
    || (char4Code >= 48 && char4Code <= 57) 
    ||(char4Code >= 65 && char4Code <= 90) 
    || (char4Code >= 97 && char4Code <= 122)) {
    console.log(`${char4} is not a special character`)
} 
else {
    console.log(`${char4} is a special character`)
}

/*
Task05

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.
NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1: "a"
Expected result 1:
"a" is a vowel

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N"  is not a vowel

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/

let char5 = 'A';

if(char5.toLowerCase().includes('a') ||
char5.toLowerCase().includes('e') ||
char5.toLowerCase().includes('i') ||
char5.toLowerCase().includes('o') ||
char5.toLowerCase().includes('u')) {
    console.log(`${char5} is a vowel.`)
} else if(char5.includes(' ')) {
    console.log('INVALID INPUT')
} else {
    console.log(`${char5} is NOT a vowel`)
}

// AKIN:

let char55 = 'O';
let char5Code = char55.charCodeAt(0);

if((char5Code >= 65 && char5Code <= 90) || (char5Code >= 97 && char5Code <= 122)) {
  if('aeiouAEIOU'.includes(char55)) {
    console.log(`"${char55}" is a vowel`);
  }
  else {
    console.log(`"${char55}" is not a vowel`);
  }
}
else {
  console.log('INVALID INPUT');
}

