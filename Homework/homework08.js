console.log('\n--------TASK01--------\n')
// Write a function named hasLowerCase() which takes a string argument and returns true if there is a lowercase letter and false if it there isn’t. 


const hasLowerCase = str => {
    for(const char of str) {
        if(char >= 'a' && char <= 'z') return true
    }
    return false
}

// const hasLowerCase = str => [...str].some(char => char >= 'a' && char <= 'z')

console.log(hasLowerCase("")) // false 
console.log(hasLowerCase("JAVASCRIPT")) // false
console.log(hasLowerCase("hello")) // true
console.log(hasLowerCase("125$")) // false
console.log(hasLowerCase("   a   ")) // true



console.log('\n--------TASK02--------\n')
// Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.

const noZero = arr => arr.filter(num => num !== 0)

console.log(noZero([1])) // [ 1 ]
console.log(noZero([1, 1, 10])) // [ 1, 1, 10 ]
console.log(noZero([0, 1, 10])) // [ 1, 10 ]
console.log(noZero([0, 0, 0])) // []
console.log(noZero([10, 100, 0])) // [ 10, 100 ]


console.log('\n--------TASK03--------\n')
/* Write a function named numberAndSquare() which takes an array of numbers as argument and returns a 
multidimensional array with all numbers squared. 
*/

const numberAndSquare = arr => arr.map(num => [num, num * num])

console.log(numberAndSquare([1, 2, 3])) // [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])) // [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])) // [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])) // [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])) // [[0, 0], [1, 1], [-10, 100]]


console.log('\n--------TASK04--------\n')
/* Write a function named containsValue() which takes a string array and a string as arguments and returns a boolean value. 
Search the string variable inside of the array and return true if it exists in the array. If it doesn’t exist, return false. ​

NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.
*/

const containsValue = (arr, str) => arr.includes(str)

console.log(containsValue(["abc", "foo", "javascript"], "hello")) // false
console.log(containsValue(["abc", "def", "123"], "Abc")) // false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")) // true


console.log('\n--------TASK05--------\n')
/* Write a function named reverseSentence() which takes a string as argument and returns the words in reverse order.​ 
If there is no enough words reverse, return "There is not enough words!".
*/

const reverseSentence = str => {
    str = str[0].toLowerCase() + str.slice(1)

    let wordsArr = str.split(' ')
    if (wordsArr.length <= 1) return "There is not enough words!"

    let newSentence = wordsArr.reverse().join(' ')

    return newSentence[0].toUpperCase() + newSentence.slice(1)
}

console.log(reverseSentence("Hello")) // "There is not enough words!"
console.log(reverseSentence("Javascript is fun")) // "Fun is javascript"
console.log(reverseSentence("This is a sentence")) // "Sentence a is this"



console.log('\n--------TASK06--------\n')
/* Write a function named removeStringSpecialsDigits() which takes a string as argument and return a 
string without the special characters or digits.
*/

const removeStringSpecialsDigits = str => 
    str.split('').filter(char => (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || char === ' ').join('');

// const removeStringSpecialsDigits = str => str.replace(/[^a-zA-Z ]/g, '')

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")) // "Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress")) // "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")) // "Automation"



console.log('\n--------TASK07--------\n')
/* Write a function named removeArraySpecialsDigits() which takes a string array as argument and return back 
without the special characters or digits.
*/

const removeArraySpecialsDigits = arr => {
    return arr.map(str => str.split('').filter(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ').join(''))
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])) // ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])) // ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])) // ["Automation", "tool"]




console.log('\n--------TASK08--------\n')
// Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.

const getCommons1 = (arr1, arr2) => {
    let commonsArr = []
    
    arr1.forEach(str => {
        if (arr2.includes(str) && !commonsArr.includes(str)) {
            commonsArr.push(str)
        }
    })
    return commonsArr
}

// BILAL

const getCommons = (arr1, arr2) => {
    let result = []

    for(let ele of arr1) {
        if (arr2.includes(ele) && !result.includes(ele)) {
            result.push(ele)
        }
    }
    return result
}

// one more option
const getCommons = (arr1, arr2) => {
    return arr1.reduce((result, ele) => 
       arr2.includes(ele) && !result.includes(ele) ? result.concat(ele) : result, []
    );
 };

console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )) // []
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )) // ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )) // ["C#"]



console.log('\n--------TASK09--------\n')
/* Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X 
removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
*/

const noXInVariables1 = arr => {
    let mappedArr = arr.map(ele => {
        let filteredChars = String(ele).split('').filter(char => char !== 'x' && char !== 'X')
        let newEle = filteredChars.join('')
        return newEle
    })

    return mappedArr.filter(ele => ele !== '')
}

// BILAL:

const noXInVariables = arr => {
    return arr.map(ele => typeof ele === 'string' ? ele.split('').filter(ele => ele.toLowerCase() !== 'x').join('') : ele)
}


console.log(noXInVariables(["abc", 123, "#$%"])) // ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])) // ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])) // [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])) // ["yyy", "ABC"]


