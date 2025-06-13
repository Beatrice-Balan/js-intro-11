console.log('\n--------TASK01--------\n')
/*Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter 
and false otherwise.

Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
*/

const hasUpperCase = str => {
    if(str === '') return false

    for(let char of str) {
        if(char >= 'A' && char <= 'Z') return true
    }
    return false
}

// const hasUpperCase = str => /[A-Z]/.test(str)
// const hasUpperCase = str => str.split('').some(char => char >= 'A' && char <= 'Z');

console.log(hasUpperCase("javascript")) // false
console.log(hasUpperCase("John")) // true
console.log(hasUpperCase("$125.0")) // false
console.log(hasUpperCase("")) // false


console.log('\n--------TASK02--------\n')
// Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.

const noDigit = str => str.split('').filter(char => !(char >= '0' && char <= '9')).join('')

//const noDigit = str => str.split('').filter(char => isNaN(char)).join('')

console.log(noDigit("")) // ""
console.log(noDigit("Javascript")) // "Javascript"
console.log(noDigit("123Hello")) // "Hello"
console.log(noDigit("123Hello World149")) // "Hello World"
console.log(noDigit("123Tech456Global149")) // "TechGlobal"


console.log('\n--------TASK03--------\n')
// Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string​.

const noVowel = str => str.split('').filter((char) => !('aeiou'.includes(char.toLowerCase()))).join('')

// reduce() const noVowel = str => str.split('').reduce((acc, char) => 'aeiouAEIOU'.includes(char) ? acc : acc + char, '')


console.log(noVowel("TechGlobal")) // "TchGlbl"
console.log(noVowel("AEOxyz")) // "xyz"
console.log(noVowel("Javascript")) // "Jvscrpt"
console.log(noVowel("")) // ""
console.log(noVowel("125$")) //"125$"


console.log('\n--------TASK04--------\n')
// Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​

/*
const no13 = arr => {
    let newArr = []
    for(let num of arr) {
        if(num === 13) newArr.push(0)
        else newArr.push(num)
    }
    return newArr
}
*/

const no13 = arr => arr.map(num => num === 13 ? 0 : num)

console.log(no13([1, 2, 3 ,4])) // [1, 2, 3 ,4] 
console.log(no13([13, 2, 3])) // [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])) // [0, 0, 0, 0, 0]
console.log(no13([])) // []


console.log('\n--------TASK05--------\n')
// Write a function named middleInt() which takes three number arguments and return the middle number. ​

function middleInt(num1, num2, num3) {
    let arr = [num1, num2, num3]

    arr.sort((a, b) => a - b)
    return arr[1]
}


console.log(middleInt(1, 2, 2)) // 2
console.log(middleInt(5, 5, 8)) // 5
console.log(middleInt(5, 3, 5)) // 5
console.log(middleInt(1, 1, 1)) // 1
console.log(middleInt(-1, 25, 10)) // 10

console.log(middleInt(10, 20, 15)) // 15
console.log(middleInt(-5, -10, -3)) // -5
console.log(middleInt(100, 50, 75)) // 75



console.log('\n--------TASK06--------\n')
// Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​

function sumOfDigits(str) {
    let sum = 0;
    for (let char of str) {
      if (char >= '0' && char <= '9') {
        sum += Number(char)
      }
    }
    return sum
  }

  const sumOfDigits = str => str.split('').filter(char => char >= '0' && char <= '9').reduce((sum, digit) => sum + Number(digit), 0);

console.log(sumOfDigits("Javascript")) // 0
console.log(sumOfDigits("John’s age is 29")) // 11
console.log(sumOfDigits("$125.0")) // 8
console.log(sumOfDigits("")) // 0


const sumOfDigits = str => str.split('').filter(char => char >= '0' && char <= '9').reduce((sum, digit) => sum + Number(digit), 0);

// HANDLE negative numbers:

const sumOfDigits = str => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '-') {
        // If there's a negative sign, the next character should be a digit
        if (i + 1 < str.length && str[i + 1] >= '0' && str[i + 1] <= '9') {
          sum += (-Number(str[i + 1])); // Add negative value
          i++; // Skip the next digit since it's already processed
        }
      } else if (str[i] >= '0' && str[i] <= '9') {
        sum += Number(str[i]); // Add positive digit
      }
    }
    return sum;
  }



console.log('\n--------TASK07--------\n')
/* Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/

const arrFactorial = arr => {
    
    const factorial = num => {
        let factorial = 1
        for(let i = 2; i <= num; i++){
            factorial *= i
        }
        return factorial
    }

    return arr.map(factorial)
}

// recursion
const arrFactorial = arr => {
    const factorial = num => num === 0 || num === 1 ? 1 : num * factorial(num - 1)
    return arr.map(factorial)
  }

  // one line
  // const arrFactorial = arr => arr.map(num => num === 0 || num === 1 ? 1 : num * arrFactorial([num - 1])[0] )


console.log(arrFactorial([1, 2, 3 ,4])) // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])) // [1,120]
console.log(arrFactorial([5 , 0, 6])) // [120, 1, 720]
console.log(arrFactorial([])) //  []


// factorial(0) = 1
// factorial(1) = 1
// factorial(2) =  2 * factorial(2 - 1) -> 2 * 1 = 2
// factorial(3) =  3 * factorial(3 - 1) -> 3 * 2 = 6
// factorial(3) =  4 * factorial(4 - 1) -> 4 * 6 = 24

// one more way to solve it
const arrFactor = arr => arr.map((ele) => [...Array(ele).keys()].reduce((prod, val) => prod * (val + 1), 1))


console.log('\n--------TASK08--------\n')
/*
Write a function named categorizeCharacters() which takes a string word as argument and return an array as letters at index of 0, 
digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/

const categorizeCharacters = str => {
    let letters = ''
    let digits = ''
    let specials = ''

    for (let char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') letters += char
        else if (char >= '0' && char <= '9') digits += char
        else specials += char
    }
    return [letters, digits, specials]
}

console.log(categorizeCharacters("1234"))
console.log(categorizeCharacters("abc123$#%"))
console.log(categorizeCharacters("12ab$%3c%"))

// BILAL:

const categorizeCharacters1 = str => {
    return str.split('').reduce((result, ele) => {
      if (ele.toLowerCase() >= 'a' && ele.toLowerCase() <= 'z') result[0] += ele
      else if (ele >= '0' && ele <= '9') result[1] += ele; // Append to digits
      else if (ele !== ' ') result[2] += ele; // Append to specials
    
      return result; // Return the accumulator
    }, ['', '', '']); // Initial value for reduce
  };

console.log(categorizeCharacters1("1234")) // [ '', '1234', '' ]
console.log(categorizeCharacters1("abc123$#%")) // [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters1("12ab$%3c%")) // [ 'abc', '123', '$%%' ]
