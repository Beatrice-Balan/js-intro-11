console.log('\n--------TASK01--------\n')
/* Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive​ when invoked. 

Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/

// filter()
const countPos = arr => arr.filter((num) => num > 0).length

// forEach()
const countPos = arr => {
    let posCount = 0;
    arr.forEach((element) => {
        if(element > 0) posCount++
    })
    return posCount
}

// for of

function countPos(arr) {
    let posCount = 0;
    for(num of arr) {
        if(num > 0) posCount++
    }
    return posCount
}

console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))


console.log('\n--------TASK02--------\n')
/* Requirement:
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			- 0
*/

// for... of loop
const countA = str => {
    let aCounter = 0
    for(let char of str) {
        if(char.toLowerCase() === 'a') aCounter++
    }
    return aCounter
}

// filter
const countA = str => str.split('').filter(char => char.toLowerCase() === 'a').length;


console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))
console.log(countA("Cypress"))



console.log('\n--------TASK03--------\n')
/* Write a function named as countVowels() which takes a string word as an argument and returns 
the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/

// loop
const countVowels = str => {
    let vowelCount = 0
    for(let char of str) {
       if('aeiou'.includes(char.toLowerCase())) vowelCount++
    }
    return vowelCount
}

// filter()

const countVowels = str => str.split('').filter(char => 'aeiou'.includes(char.toLowerCase())).length


console.log(countVowels("Hello") )
console.log(countVowels("Hello World"))
console.log(countVowels("JavaScript is fun"))
console.log(countVowels(""))



console.log('\n--------TASK04--------\n')
/* Write a function named as countConsonants() which takes a string word as an argument and returns the 
count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

// for..of  - count non vowels
const countConsonants = str => {
    let consCounter = 0
    for(char of str) {
        if(!'aeiou'.includes(char.toLowerCase())) consCounter++
    }
    return consCounter
}
console.log(countConsonants("Hello")) // 3
console.log(countConsonants("Hello World")) // 8
console.log(countConsonants("JavaScript is fun")) // 12
console.log(countConsonants("")) // 0



// for loop => WHY IS THIS WRONG??
const countConsonants = str => {
    let consCounter = 0
    for (let i = 0; i < str.length; i++) {
        const char = str[i].trim().toLowerCase()
        if (char >= 'a' && char <= 'z' && !'aeiouAEIOU'.includes(char)) consCounter++
    }
    return consCounter
}

console.log(countConsonants("Hello")) // 3 ok
console.log(countConsonants("Hello World")) // 7 excluding spaces
console.log(countConsonants("JavaScript is fun")) // 10 excluding spaces
console.log(countConsonants("")) // 0


console.log('\n--------TASK05--------\n')
/* Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 
countWords("1 2 3 4") 				-> 4
*/

const countWords = str => {
   let words = str.trim().split(' ')
   let wordCount = words.filter((word) => word !== '').length
   return wordCount
}

// regex
const countWords = str => {
    return str.trim().split(/\s+/).length;
};


// simplified filter()
const countWords = str => {
    return str.trim().split(' ').filter(word => word).length;
};

console.log(countWords("      Javascript  is   fun      ") )
console.log(countWords("Cypress is an UI automation tool.   ") )
console.log(countWords("1 2 3 4"))


console.log('\n--------TASK06--------\n')
/* Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/

const factorial = num => {
    let factorial = 1
    for(let i = 2; i <= num; i++){
        factorial *= i
    }
    return factorial
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))


const factorial = num => {
    let result = 1;
    for(let i = num; i > 1; i--) {
        result *= i
    }
    return result
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))


// BILAL ->  RECURSION - GOOD FOR INTERVIEWS
// not that good for code

// factorial(0) = 1
// factorial(1) = 1
// factorial(2) =  2 * factorial(2 - 1) -> 2 * 1 = 2
// factorial(3) =  3 * factorial(3 - 1) -> 3 * 2 = 6
// factorial(3) =  4 * factorial(4 - 1) -> 4 * 6 = 24


const factorial = num => num === 0 || num === 1 ? 1 : num * factorial(num - 1)

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))









console.log('\n--------TASK07--------\n')
/* Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome 
or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true
*/

const isPalindrome = word => {
    let wordLowC = word.toLowerCase()
    let reversedWord = wordLowC.split('').reverse().join('')
    return wordLowC === reversedWord
}

console.log(isPalindrome('Hello')) // false
console.log(isPalindrome('Kayak')) // true
console.log(isPalindrome('civic')) // true
console.log(isPalindrome('abba')) // true
console.log(isPalindrome('ab  a')) // false
console.log(isPalindrome('123454321')) // true
console.log(isPalindrome('A')) // true
console.log(isPalindrome('')) // true


console.log('\n--------TASK08--------\n')
/* Write a function named as countMultipleWords() which takes an array as an argument and returns 
the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.

Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0
*/

// for of loop

const countMultipleWords = arr => {
    let elWithMultipleWords = 0

    for(const element of arr) {
        let wordCount = element.trim().split(' ').filter((word) => word !== '').length

        if(wordCount > 1) elWithMultipleWords++
    }
    return elWithMultipleWords
}

// reduce()

const countMultipleWords = arr => {
    return arr.reduce((count, element) => {
        let wordCount = element.trim().split(' ').filter(word => word !== '').length

        if(wordCount > 1) count++

        return count
    }, 0);
};


console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ])) // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])) // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])) // 4
console.log(countMultipleWords([ ])) // 0



console.log('\n--------TASK09--------\n')
/* Write a function named as count3OrLess() which takes a string word as an argument and returns the 
count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/

// for loop
const count3OrLess = str => {
    let arr = str.trim().split(' ')
    let count3Char = 0

    for(const word of arr) {
        if(word !== '' && word.length <= 3) count3Char++
    }

    return count3Char
}

console.log(count3OrLess("Hello")) // 0
console.log(count3OrLess("Hi John")) // 1
console.log(count3OrLess("JavaScript is fun")) // 2
console.log(count3OrLess("My name is John Doe")) // 3
console.log(count3OrLess("")) // 0

// reduce

const count3OrLess = str => {
    let arr = str.trim().split(' ')

   return arr.reduce((count, curr) => {
        if(curr.length <= 3 && curr !== '') count++

        return count
   }, 0)
}


console.log(count3OrLess("Hello")) // 0
console.log(count3OrLess("Hi John")) // 1
console.log(count3OrLess("JavaScript is fun")) // 2
console.log(count3OrLess("My name is John Doe")) // 3
console.log(count3OrLess("")) // 0



console.log('\n--------TASK10--------\n')
/* Write a function named as isPrime() which takes a number as an argument and returns 
true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 		-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/

const isPrime = num => {
    if(num < 2) return false
    if(num === 2 || num === 3) return true
    if(num % 2 === 0 || num % 3 === 0) return false

    for(i = 5; i < num; i+=2) {
        if(num % i === 0) return false
    }
    return true
}



console.log(isPrime(5)) // true
console.log(isPrime(2)) // true
console.log(isPrime(29)) // true
console.log(isPrime(-5)) // false
console.log(isPrime(0)) // false
console.log(isPrime(1)) // false
console.log(isPrime(3)) // true


// BILAL SOLUTION:
// LEARN THIS ONE


const isPrime1 = num => {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false; // if num is not 2, and is even, then it can't be a prime number
// make the loop so it has less iterations
    for(i = 5; i < num; i+=2) {
        if (num % i === 0) return false
    }
    return true
}

/*
- You immediately return false for numbers less than 2, and true for 2 and 3, which are prime numbers
- By checking if the number is divisible by 2 or 3 right away, you avoid checking even numbers or multiples of 3. 
This ensures fewer iterations in the loop.
- You start the loop from 5 and increment by 2 (i+=2), which skips even numbers (since you already checked for divisibility by 2) 
and reduces the number of iterations. You’re only checking odd numbers after 3.

*/




console.log(isPrime(5)) // true
console.log(isPrime(2)) // true
console.log(isPrime(29)) // true
console.log(isPrime(-5)) // false
console.log(isPrime(0)) // false
console.log(isPrime(1)) // false
console.log(isPrime(3)) // true







console.log('\n--------TASK11--------\n')
/* Write a function named add() which takes two array of numbers as argument and returns a new array with 
sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.

Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]
*/

const add = (arr1, arr2) => {
    let arr3 = []

    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0)
            arr3.push(sum)
    }
    return arr3
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))


console.log('\n--------TASK12--------\n')
/* Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back 
with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" 
*/

const removeExtraSpaces = str => {
    let filteredWords = str.trim().split(' ').filter(char => char !== '')

    return filteredWords.join(' ')
}

// regex
// const removeExtraSpaces = str => str.trim().replace(/\s+/g, ' ');

console.log(removeExtraSpaces("Hello"))
console.log(removeExtraSpaces("      Hello    World     "))
console.log(removeExtraSpaces("     JavaScript is          fun"))
console.log(removeExtraSpaces(""))



console.log('\n--------TASK13--------\n')
/* Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element 
to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.

Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0
*/

const findClosestTo10 = arr => {
    let closestTo10 = Infinity;

    for(const num of arr) {
       if(num === 10) continue

        if(Math.abs(num - 10) < Math.abs(closestTo10 - 10) || (Math.abs(num - 10) === Math.abs(closestTo10 - 10) && num < closestTo10)) {
            closestTo10 = num
        }
    }
    return closestTo10
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]))
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]))
console.log(findClosestTo10([0, -1, -2]))


// TRY REDUCE()
const findClosestTo10 = arr => {

   return arr.filter(num => num !== 10).reduce((acc, curr) => {
        let currAbsDiff = Math.abs(curr - 10)
        let closestTo10AbsDiff = Math.abs(acc - 10)

        if (currAbsDiff < closestTo10AbsDiff || (currAbsDiff === closestTo10AbsDiff) && (curr < acc)) {
            return curr
        }
            return acc
    }, Infinity)
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]))
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]))
console.log(findClosestTo10([0, -1, -2]))

// BILAL

const findClosestTo10 = arr => {
    let closestTo10 = Number.MAX_VALUE;
    let closestDiff = Number.MAX_VALUE;

    for(let num of arr) {
        if(num === 10) continue;

        let currDiff = Math.abs(num - 10)

        if(currDiff < closestDiff || (currDiff === closestDiff) && num < closestTo10) {
            closestTo10 = num
            closestDiff = currDiff;
    }
}
    return closestTo10
} 

console.log(findClosestTo10([10, -13, 5, 70, 15, 57])) // 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])) // 8
console.log(findClosestTo10([0, -1, -2])) // 0



console.log('\n--------TASK14--------\n')
/* Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning

There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:

isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true
*/
   
const isEmailValid = str => {
    let indexOfAt = str.indexOf('@')
    let lastIndexOfDot = str.lastIndexOf('.')

    if(str === '' || str.includes(' ')) return false

    if((indexOfAt !== str.lastIndexOf('@')) || (indexOfAt < 2)) return false

    if(lastIndexOfDot < indexOfAt) return false

    if((str.length - lastIndexOfDot - 1 < 2) || (lastIndexOfDot === -1)) return false

    if(str.slice(indexOfAt + 1, lastIndexOfDot).length < 2) return false

return true
}

console.log(isEmailValid("")) // false
console.log(isEmailValid("@gmail.com")) // false
console.log(isEmailValid("johndoe@yahoo")) // false
console.log(isEmailValid("a@outlook.com")) // false
console.log(isEmailValid("johndoe@a.com") ) // false
console.log(isEmailValid("johndoe@@gmail.com")) // false
console.log(isEmailValid("johndoe@gmail.com")) // true

console.log(isEmailValid("johndoe@mail.co.uk")) // true
console.log(isEmailValid("johndoe@y.co")) // false


// array split
const isEmailValid = str => {
    if(str === '' || str.includes(' ') || str.indexOf('@') !== str.lastIndexOf('@')) return false

    const [username, fullEmailDomain] = str.split('@')

        if(username.length < 2) return false
        if(!fullEmailDomain.includes('.')) return false
    
    const lastDotIndex = fullEmailDomain.lastIndexOf('.')
    const domainName = fullEmailDomain.slice(0, lastDotIndex)
    const topLevelDomain = fullEmailDomain.slice(lastDotIndex + 1)

        if(domainName === '' || topLevelDomain === '') return false
        if(domainName.length < 2 || topLevelDomain.length < 2) return false

return true
}

// BILAL SOLUTION BUT I GOT SOMETHING WROGNG HERE -

const isEmailValid = email => {
    if(email.includes(' ')) return false

    let beforeAt = email.split('@')[0] // ab -> index is to get the first part, because you have multiple arrays now, and you want the first one
    let beforeDot = email.split('@')[1].split('.')[0] // gmail
    let afterDot = email.split('@')[1].split('.')[1] // com

    if(!beforeAt || !beforeDot || !afterDot) return false

    return (beforeAt.length >= 2) && (beforeDot.length >= 2) && (afterDot.length >= 2)
}




console.log(isEmailValid("")) // false
console.log(isEmailValid("@gmail.com")) // false
console.log(isEmailValid("johndoe@yahoo")) // false
console.log(isEmailValid("a@outlook.com")) // false
console.log(isEmailValid("johndoe@a.com") ) // false
console.log(isEmailValid("johndoe@@gmail.com")) // false
console.log(isEmailValid("johndoe@gmail.com")) // true

console.log(isEmailValid("johndoe@mail.co.uk")) // true
console.log(isEmailValid("johndoe@y.co")) // false


console.log('\n--------TASK15--------\n')
/* Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid 
or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true
*/


// some()
const isPasswordValid = str => {
    if(str.length < 8 || str.length > 16) return false
    if (!str || str.includes(' ')) return false

    const charArr = str.split('')

    let upperCaseC = charArr.some((char) => char >= 'A' && char <= 'Z')
    let lowerCaseC = charArr.some((char) => char >= 'a' && char <= 'z')
    let digit = charArr.some((char) => char >= '0' && char <= '9')

    let special = charArr.some((char) => !(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && !(char >= '0' && char <= '9'))

    return upperCaseC && lowerCaseC && digit && special
}


// for of loop
const isPasswordValid = str => {
    if(str.length < 8 || str.length > 16) return false
    if (!str || str.includes(' ')) return false

    const charArr = str.split('')

    let upperCaseC = false
    let lowerCaseC = false
    let digit = false
    let special = false

    for(const char of charArr) {
    if (char >= 'A' && char <= 'Z') upperCaseC = true
    if (char >= 'a' && char <= 'z') lowerCaseC = true
    if (char >= '0' && char <= '9') digit = true
    if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && !(char >= '0' && char <= '9')) special = true
    }

        return upperCaseC && lowerCaseC && digit && special
}

// BILAL -> suggested best opption

const isPassValid = password =>{
    if(password.length < 8 || password.length > 16) return false;
    if (password.includes(' ')) return false;
// at least 1 digit, 1 uppercase, 1 lowercase and 1 special char
    let hasDigit = hasLowerCase = hasUpperCase = hasSpecial = false;

    for(let char of password) {
        if(char >= '0' && char <= '9') hasDigit = true
        else if(char >= 'a' && char <= 'z') hasLowerCase = true
        else if(char >= 'A' && char <= 'Z') hasLowerCase = true
        else hasSpecial = true;
    }

    return hasDigit && hasLowerCase && upperCaseC && hasSpecial;
}

// BILAL -> option, not as good of a code, but works
// use filter() to make it LOOK cleaner, but not as efficient

const isPassValid = password => {
    if(password.length < 8 || password.length > 16 || password.includes(' ')) return false

    if(password.split('').filter(char => char >= '0' && char <= '9').length < 1) return false
    if(password.split('').filter(char => char >= 'a' && char <= 'z').length < 1) return false
    if(password.split('').filter(char => char >= 'A' && char <= 'Z').length < 1) return false

    // here you're checking if char is Outside of the range of digits, or letters, meaning it has to be a special character
    if(password.split('').filter(char => (char < '0' || char > '9') && (char < 'a' || char > 'z') && (char < 'A' || char > 'Z')).length < 1) return false
    // or use ! to say its NOT any of the above
    //if(password.split('').filter(char => !((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))).length < 1) return false

        return true
}



console.log(isPassValid("")) // false OK
console.log(isPassValid("abcd") ) // false OK
console.log(isPassValid("abcd1234") ) // false  OK
console.log(isPassValid("Abcd1234") ) // false OK

console.log(isPassValid("Chicago12345US!#$%")) // false OK
console.log(isPassValid("Abcd1234$")) // true OK 
console.log(isPassValid("Chicago123$")) // true OK 
console.log(isPassValid("Test1234#")) // true OK

