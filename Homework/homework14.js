console.log('\n--------TASK01--------\n')
/* TASK 1
Write a function named repeatingX() which takes a string argument and returns true if the letter x is 
followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
*/

const repeatingX = str => {
    let lowerStr = str.toLowerCase()
    if(!str) return false

    for(let i = 0; i < lowerStr.length; i++) {
        if(lowerStr[i] === 'x' && lowerStr[i + 1] === 'x') return true
    }
    return false
}

console.log(repeatingX("xTechxGlobalx")) // false
console.log(repeatingX("Hello Xx World")) // true
console.log(repeatingX("x x")) // false
console.log(repeatingX(""))// false
console.log(repeatingX("xxxxx")) // true


console.log('\n--------TASK02--------\n')
/* TASK 2
Write a function named isPerfectSquare() which takes a number as an argument and checks if it is a perfect square. 
It returns true if the number is a perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an integer by itself or as the 
second exponent of an integer. For example, 25 is a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. 
However, 21 is not a perfect square number because it cannot be expressed as the product of two same integers.
*/

const isPerfectSquare = num => {
    if(num < 0) return false

    return Number.isInteger(Math.sqrt(num))
}


console.log(isPerfectSquare(25))// true
console.log(isPerfectSquare(24)) // false
console.log(isPerfectSquare(0)) // true
console.log(isPerfectSquare(1)) // true
console.log(isPerfectSquare(-1)) // false
console.log(isPerfectSquare(144)) // true



console.log('\n--------TASK03--------\n')
/* TASK 3
Write a function named convertTemperature() which takes a number and a string arguments to be considered as a temperature value 
and a unit (either Celsius or Fahrenheit) as arguments and converts the temperature to the other unit.

NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
*/

const convertTemperature = (temp, unit) => {
    unit = unit.toLowerCase()

    if(unit === 'celsius') {
        return (temp * 9 / 5) + 32
    }
    else if(unit === 'fahrenheit') {
        return (temp - 32) * 5 / 9
    }
    else return 'Incorrect unit entered, please enter "Celsius"  or "Fahrenheit" '
}

console.log(convertTemperature(100, 'Celsius')) // 212
console.log(convertTemperature(32, 'Fahrenheit')) // 0
console.log(convertTemperature(0, 'Celsius')) // 32
console.log(convertTemperature(212, 'Fahrenheit')) // 100
console.log(convertTemperature(-40, 'Celsius')) // -40
console.log(convertTemperature(-40, 'Fahrenheit')) // -40
console.log(convertTemperature(-4, 'Kelvin')) // Incorrect unit entered, please enter "Celsius"  or "Fahrenheit"
console.log(convertTemperature(-40, 'celsius')) // -40


console.log('\n--------TASK04--------\n')
/* TASK 4
Write a function named sumOfEvenNumbers() which takes an array as an argument and returns the sum of all the even numbers in an array.
Examples:
sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) 		-> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ) 	-> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) 	-> 0
sumOfEvenNumbers( [ ] ) 			-> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ) 			-> 6
sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) 		-> 150
*/

const sumOfEvenNumbers = arr => {
    let sum = 0

    for(let num of arr) {
        if(num % 2 === 0) sum += num
    }    
    return sum
}

console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] )) // 30
console.log(sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] )) // 110
console.log(sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] )) // 0
console.log(sumOfEvenNumbers( [ ] )) // 0
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] )) // 6
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] )) // 150


console.log('\n--------TASK05--------\n')
/* TASK 5
Write a function named capsOdds() which takes an array argument and returns the array with all the odd index elements 
capitalized (converted to uppercase).
*/

const capsOdds = arr => {
    let capsOddsArr = [...arr]

    for(let i = 1; i < arr.length; i += 2) {
        capsOddsArr[i] = capsOddsArr[i].toUpperCase()
    }

    return capsOddsArr
}

console.log(capsOdds(["Hello", "World"])) // ["Hello", "WORLD"]
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"])) // ["Jan", "FEB", "Mar", "APR"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])) // ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
console.log(capsOdds([ ])) // [ ]
console.log(capsOdds(["John !@#$%", "^&*() Doe"])) // ["John !@#$%", "^&*() DOE"]


