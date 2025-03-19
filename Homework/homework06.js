console.log('\n--------TASK01--------\n')
// Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.

const noSpace = str => str.split(' ').join('')

// regex: 
// const noSpace = str => str.replace(/\s+/g, '')

console.log(noSpace("") ) // ''
console.log(noSpace("Javascript")) // "Javascript"
console.log(noSpace("    Hello   ")) // "Hello"
console.log(noSpace(" Hello World   ")) // "HelloWorld”
console.log(noSpace("Tech Global")) // "TechGlobal"



console.log('\n--------TASK02--------\n')
/* Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.

NOTE: Ignore extra spaces before and after the string.
*/

const replaceFirstLast = str => str.trim().length < 2 ? '' : str.at(-1) + str.slice(1, -1) + str[0]

console.log(replaceFirstLast("")) // ''
console.log(replaceFirstLast("Hello")) // oellH
console.log(replaceFirstLast("Tech Global")) // lech GlobaT
console.log(replaceFirstLast("A")) // ''
console.log(replaceFirstLast("   A    ")) // ''



console.log('\n--------TASK03--------\n')
/*
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, 
returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/

const hasVowel = str => str.toLowerCase().split('').some((x) => 'aeiou'.includes(x))

//regex: const hasVowel = str => /[aeiou]/i.test(str)

console.log(hasVowel("")) // false
console.log(hasVowel("Javascript")) // true
console.log(hasVowel("Tech Global")) // true
console.log(hasVowel("1234")) // false
console.log(hasVowel("ABC")) // true


console.log('\n--------TASK04--------\n')
/* Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth 
and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"

NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/

const checkAge = yearOfBirth => {
    let currentYear = new Date().getFullYear()
    let age = currentYear - yearOfBirth

    if(age < 0 || age > 120) return "AGE IS NOT VALID"
    if(age < 16) return "AGE IS NOT ALLOWED"
    return "AGE IS ALLOWED"
}

console.log(checkAge(2015)) // "AGE IS NOT ALLOWED"
console.log(checkAge(2007)) // "AGE IS ALLOWED"
console.log(checkAge(2050)) // "AGE IS NOT VALID"
console.log(checkAge(1920)) // "AGE IS ALLOWED"
console.log(checkAge(1800)) // "AGE IS NOT VALID"


console.log('\n--------TASK05--------\n')
// Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.

const averageOfEdges = (num1, num2, num3) => {
    let min = Math.min(num1, num2, num3)
    let max = Math.max(num1, num2, num3)
    
    return (min + max) / 2
}

console.log(averageOfEdges(0, 0, 0)) // 0
console.log(averageOfEdges(0, 0, 6)) // 3
console.log(averageOfEdges(-2, -2, 10)) // 4
console.log(averageOfEdges(-3, 15, -3)) // 6
console.log(averageOfEdges(10, 13, 20)) // 15


console.log('\n--------TASK06--------\n')
/*Write a function named noA() which takes an array of strings as argument and will return a new array with all elements 
starting with "A" or "a" replaced with "###".
*/

const noA = arr => arr.map(str => str[0].toLowerCase() === 'a' ? '###' : str)

console.log(noA(["javascript", "hello", "123", "xyz"])) // ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])) // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) // ["###", "###", "###", "###", "###"]



console.log('\n--------TASK07--------\n')
/*Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
*/

const no3and5 = arr => {
   return arr.map((ele) => {
        if(ele % 5 === 0 && ele % 3 === 0) return 101
        if(ele % 5 === 0) return 99
        if(ele % 3 === 0) return 100
        return ele
    })
}

console.log(no3and5([7, 4, 11, 23, 17])) // [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])) // [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])) // [99, 11, 100, 13, 14, 101]


console.log('\n--------TASK08--------\n')
/*Write a function named countPrimes() which takes an array of integer numbers as argument and will return the 
number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
*/

const countPrimes = arr => {

    const isPrime = num => {
        if (num < 2) return false
        if (num === 2 || num === 3) return true
        if (num % 2 === 0 || num % 3 === 0) return false
    
        for(i = 5; i < num; i+=2) {
            if (num % i === 0) return false
        }
        return true
    }
    return arr.filter(isPrime).length
}


/* one by one
const countPrimes = arr => {

    const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) { 
            if (num % i === 0) return false
        }
        return true
    }
    return arr.filter(isPrime).length 
}

console.log(countPrimes([-10, -3, 0, 1])) // 0
console.log(countPrimes([7, 4, 11, 23, 17])) // 4
console.log(countPrimes([41, 53, 19, 47, 67])) // 5
*/


console.log('\n--------TASK09--------\n')
// Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.

const removeDuplicates = arr => {
    return arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr)
         return acc
    }, [])
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])) // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])) // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])) // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])) // ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])) // ["1", "2", "3"]



console.log('\n--------TASK10--------\n')
/* Write a method named date.isDateFormatValid() that takes a string as an argument and returns true if the given date is valid or returns false otherwise.

Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>
*/

const DateCheck = {
    isDateFormatValid(date) {
        if (date === '') return false
        date = date.trim()

        if(!date.includes('/') || date.length !== 10) return false

        let month = date.split('/')[0]
        let day = date.split('/')[1]
        let year = date.split('/')[2]

            return (month.length === 2 && day.length === 2 && year.length === 4)
    }
}

console.log(DateCheck.isDateFormatValid("")) // false
console.log(DateCheck.isDateFormatValid("15/30/2020")) // false (WRONG - returns true)
console.log(DateCheck.isDateFormatValid("10-30-2020 ")) // false
console.log(DateCheck.isDateFormatValid("10.30.2020")) // false
console.log(DateCheck.isDateFormatValid("5/30/2020")) // false
console.log(DateCheck.isDateFormatValid("05/30/2020 ")) // true
console.log(DateCheck.isDateFormatValid("10/2/2020")) // false
console.log(DateCheck.isDateFormatValid("10/02/2020 ")) // true   


console.log('\n--------TASK11--------\n')
/*Write a method named secondMax() takes an array argument and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.
*/

const ArrayMath = {
    secondMax(numArr) {
    const maxNum = Math.max(...numArr) 
    const noMaxArr = numArr.filter((num) => num < maxNum)

    if (numArr.length === 1) return maxNum
    return Math.max(...noMaxArr)
}
}

console.log(ArrayMath.secondMax([7, 4, 4, 4, 23, 23, 23])) // 7
console.log(ArrayMath.secondMax([3, 4, 5, 6])) // 5
console.log(ArrayMath.secondMax([10])) // 10



console.log('\n--------TASK12--------\n')
/*Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.
NOTE: Be careful when there is multiple min numbers.
*/

const MathCheck = {
    secondMin(numArr) {
       let sortedArr = numArr.sort((a, b) => a - b)

       if(numArr === 1) return numArr[0]

       for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] !== sortedArr[0]) return sortedArr[i]
       }
       return sortedArr[0]
    }
} 

console.log(MathCheck.secondMin([7, 4, 4, 4, 23, 23, 23])) // 7
console.log(MathCheck.secondMin([3, 4, 5, 6])) // 4
console.log(MathCheck.secondMin([10])) // 10



console.log('\n--------TASK13--------\n')
/*Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.
*/

const Check = {
    mostRepeated(arr) {
        const counts = arr.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1
            return acc
        }, {})

        let mostRepeatedElement = arr[0]
        let maxCount = 0

        for (let el in counts) {
            if (counts[el] > maxCount) {
                maxCount = counts[el]
                mostRepeatedElement = el
            }
        }
        return mostRepeatedElement
    }
}

console.log(Check.mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) ) // 4
console.log(Check.mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])) // pen
console.log(Check.mostRepeated([10])) // 10
console.log(Check.mostRepeated(["TechGlobal"])) // TechGlobal
