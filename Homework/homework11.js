console.log('\n--------TASK01--------\n')
/* TASK 1
Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad"​) 			-> 2
countPalindrome("See you at noon") 			-> 1
countPalindrome("Kayak races attracts racecar drivers") 	-> 2
countPalindrome("") 				-> 0
countPalindrome("No palindrome here") 		-> 0
*/

const countPalindrome = str => {
    let words = str.trim().split(' ').filter(word => word !== '')
    let count = 0
    for (let word of words) {
        if (word.toLowerCase() === word.toLowerCase().split('').reverse().join(''))
            count++
    }
    return count
}

console.log(countPalindrome("Mom and Dad")) // 2
console.log(countPalindrome("See you at noon")) // 1
console.log(countPalindrome("Kayak races attracts racecar drivers")) // 2
console.log(countPalindrome("")) // 0
console.log(countPalindrome("No palindrome here")) // 0


console.log('\n--------TASK02--------\n')
/* TASK 2
Write a function named sum() which takes an array of numbers and a boolean value as arguments. 
It will return the sum of the numbers positioned at even indexes if true. And, return sum of numbers positioned at odd indexes if false.
Examples:
sum([1, 5, 10], true) 		-> 11
sum([3, 7, 2, 5, 10], false) 	-> 12
sum([-1, 1, -2, 2], true) 		-> -3
sum([0, -1, 15, 1], false) 		-> 0
sum([1, 2, 3, 4, -4], true) 		-> 0
*/

// loop
const sum1 = (arr, bool) => {
    let result = 0

    if(bool) {
        for(let i = 0; i < arr.length; i+=2) {
            result += arr[i]
        }
    }
    else {
        for(let i = 1; i < arr.length; i+=2) {
            result += arr[i]
        }
    }

    return result
}

// reduce

const sum = (arr, bool) =>
    arr.reduce((sum, num, index) => {
        const indexType = bool ? index % 2 === 0 : index % 2 !== 0
        return indexType ? sum + num : sum
    }, 0)


console.log(sum([1, 5, 10], true)) // 11
console.log(sum([1, 5], false)) // 5
console.log(sum([3, 7, 2, 5, 10], false)) // 12
console.log(sum([-1, 1, -2, 2], true)) // -3
console.log(sum([0, -1, 15, 1], false)) // 0
console.log(sum([1, 2, 3, 4, -4], true)) // 0


console.log('\n--------TASK03--------\n')
/* TASK 3
Write a function named nthChars() which takes a string and a number as arguments and returns the string back with every nth characters.​
Examples:
nthChars("Java", 2) 		-> "aa"
nthChars("JavaScript", 5)​ 	-> "St"
nthChars("Java", 3)​ 		-> "v"
nthChars("Hi", 4)​ 		-> ""
nthChars("0123456789", 2) 	-> "13579" 
*/

const nthChars = (str, num) => {

   if(str. length < num) return ''
    let result = ''

    for(let i = num - 1; i < str.length; i += num) {
        result += str[i]
    }

    return result
}

console.log(nthChars("Java", 2)) // aa 
console.log(nthChars("JavaScript", 5)) // St
console.log(nthChars("Java", 3)) // v
console.log(nthChars("Hi", 4)) // "" 
console.log(nthChars("0123456789", 2)) // 13579 


console.log('\n--------TASK04--------\n')
/* TASK 4
Write a function named canFormString() which takes two string arguments and returns 
true if the second string can be formed by rearranging the characters of first string. 

Return false otherwise.

NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
canFormString("Hello", "Hi")​ 			-> false
canFormString("programming", "gaming")​ 		-> true
canFormString("halogen", "hello")​ 			-> false
canFormString("CONVERSATION", "voices rant on")​ 	-> true
canFormString("12", "123") 			-> false
*/


const canFormString = (str1, str2) => {
    let arr1 = str1.toLowerCase().split('').filter(char => char !== ' ')
    let arr2 = str2.toLowerCase().replace(/\s+/g, '').split('')

    return arr2.every(char => {
        if(arr1.indexOf(char) !== -1) {
            arr1.splice(arr1.indexOf(char), 1)

            return true
        }
        return false
    })
}

console.log(canFormString("Hello", "Hi")) // false
console.log(canFormString("programming", "gaming")) // true
console.log(canFormString("halogen", "hello")) // false
console.log(canFormString("CONVERSATION", "voices rant on")) // true
console.log(canFormString("12", "123")) // false

console.log(canFormString("ab", "Abba")) // false
console.log(canFormString("Abba", "ab")) // true


console.log('\n--------TASK05--------\n')
/* TASK 5
Write a function named isAnagram() which takes two string arguments and returns true if the given strings are anagram.
Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. 
In the context of strings, checking if two strings are anagrams of each other means verifying if they contain the 
same characters in the same quantities, regardless of the order of those characters.

NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
isAnagram("Apple", "Peach")​ 		-> false
isAnagram("listen", "silent")​ 		-> true
isAnagram("astronomer", "moon starer")​ 	-> true
isAnagram("CINEMA", "iceman")​ 		-> true
isAnagram("123", "1234") 		-> false
*/

const isAnagram = (str1, str2) => {
    let arr1 = str1.toLowerCase().replace(/\s+/g, '').split('').sort()
    let arr2 = str2.toLowerCase().split('').filter(char => char !== ' ').sort()

    return arr1.join('') === arr2.join('');
}

console.log(isAnagram("Apple", "Peach")) // false
console.log(isAnagram("listen", "silent")) // true
console.log(isAnagram("astronomer", "moon starer")) // true
console.log(isAnagram("CINEMA", "iceman")) // true
console.log(isAnagram("123", "1234")) // false

console.log(isAnagram("aabb", "ABBA")) // true


console.log('\n--------TASK06--------\n')
/* TASK 6
Write a function named count() which takes an array of numbers and a boolean value as arguments. 

It will return the total count of the even numbers if the boolean value is true. 
And return the total count of the odd numbers if the boolean value is false. 
Examples:
count([1, 5, 10], true) 		-> 1
count([3, 7, 2, 5, 10], false) 	-> 3
count([-1, 1, -2, 2], true) 		-> 2
count([0, -1, 15, 1], false) 	-> 3
count([1, 2, 3, 4, -4], true) 	-> 3
*/

//loop
const count1 = (arr, bool) => {
    let count = 0

    for (let num of arr) {
        if ((bool && num % 2 === 0) || (!bool && num % 2 !== 0)) {
            count++
        }
    }
    return count
}

//filter
const count = (arr, bool) => arr.filter(num => bool ? num % 2 === 0 : num % 2 !== 0).length

console.log(count([1, 5, 10], true)) // 1
console.log(count([3, 7, 2, 5, 10], false)) // 3
console.log(count([-1, 1, -2, 2], true)) // 2
console.log(count([0, -1, 15, 1], false)) // 3
console.log(count([1, 2, 3, 4, -4], true)) // 3


console.log('\n--------TASK07--------\n')
/* TASK 7
Write a function named sumDigitsDouble() which takes a string and returns the sum of the digits in the given String 
multiplied by 2. 

Return -1 if the given string does not have any digits. Ignore negative numbers.

Examples:
sumDigitsDouble("Javascript") 	-> -1
sumDigitsDouble("23abc45")​ 	-> 28
sumDigitsDouble("Hi-23") 	-> 10
sumDigitsDouble("ab12") 	-> 6
sumDigitsDouble("n0numh3r3") 	-> 12
*/

const sumDigitsDouble = str => {
    let sum = 0

    for(let char of str) {
        if(char >= '0' && char <= '9') sum += Number(char) * 2
    }
   return sum === 0 ? -1 : sum
}

console.log(sumDigitsDouble("Javascript")) // -1
console.log(sumDigitsDouble("23abc45")) // 28
console.log(sumDigitsDouble("Hi-23")) // 10
console.log(sumDigitsDouble("ab12")) // 6
console.log(sumDigitsDouble("n0numh3r3")) // 12


console.log('\n--------TASK08--------\n')
/* TASK 8
Write a function named countOccurrence() which takes two string arguments and returns how many times that 
the first string can form the second string.

Examples:
countOccurrence("Javascript", "Java") 	-> 1
countOccurrence("Hello", "World") 		-> 0
countOccurrence("Can I can a can", "anc")​ 	-> 3
countOccurrence("Hello", "l")​ 		-> 2
countOccurrence("IT conversations", "IT")​ 	-> 2
*/

const countOccurrence = (str1, str2) => {
    let arr1 = str1.toLowerCase().replace(/\s+/g, '').split('')
    let arr2 = str2.toLowerCase().replace(/\s+/g, '').split('')
    
    let count = 0

    while (arr2.every(char => arr1.includes(char)) ) {
        for (let char of arr2) {
            arr1.splice(arr1.indexOf(char), 1)
        }
        count++
    }
    return count
}

console.log(countOccurrence("Javascript", "Java")) // 1
console.log(countOccurrence("Hello", "World")) // 0
console.log(countOccurrence("Can I can a can", "anc")) // 3
console.log(countOccurrence("Hello", "l")) // 2
console.log(countOccurrence("IT conversations", "IT")) // 2
