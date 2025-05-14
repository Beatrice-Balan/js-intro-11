console.log('\n--------TASK01--------\n')
/* TASK 1
Write a function named makeNegative() that takes a number and returns its negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. So, zero will stay as zero.
*/

const makeNegative = num => num > 0 ? -num : num

console.log(makeNegative(10))
console.log(makeNegative(-7))
console.log(makeNegative(0))
console.log(makeNegative(0.45))


console.log('\n--------TASK02--------\n')
/* TASK 2
Write a function isSumEvenOrOdd() which takes three numbers as arguments and determines if the sum of these numbers is odd or even.
*/

const isSumEvenOrOdd = (n1, n2, n3) => (n1 + n2 + n3) % 2 === 0 ? 'even' : 'odd'


console.log(isSumEvenOrOdd(0, 1, 4)) // odd
console.log(isSumEvenOrOdd(0, -1, -5)) // even
console.log(isSumEvenOrOdd(0, 0, 0)) // even
console.log(isSumEvenOrOdd(7, 1, 9)) // odd
console.log(isSumEvenOrOdd(1, 1, 1)) // odd

console.log('\n--------TASK03--------\n')
/* TASK 3
Write a function named decimal2() which takes an array of numbers as an argument and returns the array with the same numbers rounded up 
or down and represented with only two decimals.
*/

const decimal2 = arr => arr.map((num) => parseFloat(num.toFixed(2)))


console.log(decimal2( [94.356, 8.9752] )) // [ 94.36, 8.98 ]
console.log(decimal2( [76.62, 128.4, 84] )) // [ 76.62, 128.4, 84 ]
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] )) // [ 20987, 3.53, 12.35, 32.90 ]
console.log(decimal2( [ ] )) // [  ]
console.log(decimal2( [4.35623, 8.9742] )) // [ 4.36, 8.97 ]


console.log('\n--------TASK04--------\n')
/* TASK 4
Write a function named myPow() which takes two numbers, x and n, as its arguments and 
returns x to the power of n without using Math.pow(). 3 to the power of 3 is 3*3*3 = 27. 
NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 equals the number itself.
*/

const myPow = (x, n) => {
    if(n === 0) return 1
    if(n === 1) return x

    let result = 1

    for(let i = 0; i < n; i++) {
        result *= x
    }
    return result
}

// exponentiation by squaring through binary decomposition (break it into powers of 2)
// if exponent is even => square the base and halve the exponent
// if expondent is odd => multiply the result by the base (you can't split teh expo evenly, so you have to handle the leftover/ remainder which means an extra multiplication), and then reduce expo by half


const myPow1 = (num, exponent) => {
    let result = 1

    while(exponent > 0) {
        if(exponent % 2 !== 0) { // exponent 3 is odd // iter 2: exponent 1 is odd
            result *= num // 1 * 3 = 3  //  iter 2: 3 * 9 = 27
        }

        num *= num // 3 * 3 = 9
        exponent = Math.floor(exponent / 2) // 3 / 2 = 1   //  iter 2:  1 / 2 = 0 => the end
    }

    return result
}

console.log(myPow(3, 3)) // 27
console.log(myPow(10, 1)) // 10
console.log(myPow(100, 0)) // 1
console.log(myPow(1, 1)) // 1
console.log(myPow(4, 2)) // 16
console.log(myPow(0, 0)) // 1
console.log(myPow(5, 3)) // 125



console.log('\n--------TASK05--------\n')
/* TASK 5
Write a function named findLongestWord() which takes a string as input and returns the longest word in the string.
NOTE: If the string is empty or consists of spaces only, then return empty string.

NOTE: If the string consists of multiple words having the longest word, then return the first occurrence.

findLongestWord("The quick brown fox jumped over the lazy dog") 	-> "jumped"
findLongestWord("This is a sample string for testing") 		->"testing" 
findLongestWord("One two ten") 				-> "One"
findLongestWord("") 					-> ""
findLongestWord("      ") 					-> ""
*/

const findLongestWord1 = str => {
    if(str.trim() === '') return ''
    let words = str.trim().split(' ')

    let longestWord = words[0]

        for(let word of words) {
            if(word.length > longestWord.length) {
                longestWord = word
            }
        }

        return longestWord
}

// reduce
const findLongestWord = str => {
    if(str.trim() === '') return ''

    let words = str.trim().split(' ')
    
    return words.reduce((currentLongest, currentWord) => currentWord.length > currentLongest.length ? currentWord : currentLongest)
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // jumped
console.log(findLongestWord("This is a sample string for testing")) // testing
console.log(findLongestWord("One two ten")) // One
console.log(findLongestWord("")) // ''
console.log(findLongestWord("      ")) // ''


