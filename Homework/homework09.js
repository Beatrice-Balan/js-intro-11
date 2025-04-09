console.log('\n--------TASK01--------\n')
/* Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, 
"Buzz" if the number is divisible by 5, 
and "FizzBuzz" if the number is divisible by both 3 and 5.
 Otherwise, it will return the number itself.​
*/

const fizzBuzz1 = num => {
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    else if(num % 3 === 0) return 'Fizz'
    else if(num % 5 === 0) return 'Buzz'
    else return num
}


console.log(fizzBuzz1(0)) // FizzBuzz
console.log(fizzBuzz1(1)) // 1
console.log(fizzBuzz1(3)) // Fizz
console.log(fizzBuzz1(5)) // Buzz
console.log(fizzBuzz1(30)) // FizzBuzz
console.log(fizzBuzz1(10)) // Buzz
console.log(fizzBuzz1(15)) // FizzBuzz
console.log(fizzBuzz1(-15)) // FizzBuzz



console.log('\n--------TASK02--------\n')
/*Write a function named fizzBuzz2() which takes a number argument and returns and array consist of numbers starting from 1 to given number. 

However, it will return 
"Fizz" for the numbers divided by 3, 
"Buzz" for the numbers divided by 5, and 
"FizzBuzz" for the numbers divided both by 3 and 5.
*/

const fizzBuzz2 = num => {
    let result = []

    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz')
        else if(i % 3 === 0) result.push('Fizz')
        else if(i % 5 === 0) result.push('Buzz')
        else result.push(i)
    }
    return result
}

console.log(fizzBuzz2(3)) // [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5)) // [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)) // [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
console.log(fizzBuzz2(15)) // [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
console.log(fizzBuzz2(2)) // [ 1, 2 ]


console.log('\n--------TASK03--------\n')
//Write a function named findSumNumbers() which takes a string argument and returns sum of the all numbers appears in the string.

const findSumNumbers = str => {
    let sum = 0
    let currentNum = ''

    for(let char of str) {
        if(char >= '0' && char <= '9') currentNum += char
            else {
               sum += Number(currentNum)
               currentNum = ''
            }
    }

        if (currentNum) {
            sum += Number(currentNum)
        }

return sum
}

console.log(findSumNumbers("abc$")) // 0
console.log(findSumNumbers("a1b4c  6#")) // 11
console.log(findSumNumbers("ab110c045d")) // 155
console.log(findSumNumbers("525")) // 525
console.log(findSumNumbers("3 for 10 dollars")) // 13



console.log('\n--------TASK04--------\n')
//Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears in the string.

const findBiggestNumber = str => {
    let numArr = []
    let currentNum = ''

    for(let char of str) {
        if(char >= '0' && char <= '9') currentNum += char
            else {
                if (currentNum) {
                    numArr.push(Number(currentNum))
                    currentNum = ''
                }
            }
        }

    if (currentNum) {
        numArr.push(Number(currentNum))
    }


    if (numArr.length > 0) return Math.max(...numArr)
     else return 0

}

/*
const findBiggestNumber = str => {
    const numArr = str.match(/\d+/g)
    if (numArr) {
        return Math.max(...numArr.map(Number))
    }
    return 0
    }
*/

console.log(findBiggestNumber("abc$")) // 0
console.log(findBiggestNumber("a1b4c  6#")) // 6
console.log(findBiggestNumber("ab110c045d")) // 110
console.log(findBiggestNumber("525")) // 525
console.log(findBiggestNumber("3 for 10 dollars")) // 10



console.log('\n--------TASK05--------\n')
/*Write a function named countOccurrencesOfCharacters() which takes a string argument and returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
*/

const countOccurrencesOfCharacters = str => {
    if(!str) return str

    let charCount = {}
    let finalResult = ''

    for (let char of str) {
        if (charCount[char]) charCount[char] += 1
        else charCount[char] = 1
        }

        for (let char of str) {
            if (charCount[char] !== 0) {
                finalResult += charCount[char] + char
                charCount[char] = 0 
            }
        }

return finalResult
}



console.log(countOccurrencesOfCharacters("")) // ""
console.log(countOccurrencesOfCharacters("abc")) // "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca")) // "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa")) // "2a2A1a”
console.log(countOccurrencesOfCharacters("www" )) // "3w"



console.log('\n--------TASK06--------\n')
/*Write a function named fibonacciSeries1() which takes a number n argument and returns the n series of Fibonacci numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/

const fibonacciSeries1 = n => {
    if(n === 1) return [0]

    let fibArr = [0, 1]

    for(let i = 2; i < n; i++) {
       fibArr.push(fibArr[i - 2] + fibArr[i - 1])
    }
    return fibArr
}

/*
const fibonacciSeries1 = n => {
    if(n === 1) return [0]
    if(n === 2) return [0, 1]

    let fibArr = fibonacciSeries1(n-1)
    fibArr.push(fibArr[n - 2] + fibArr[n - 3])

    return fibArr
}
*/

console.log('3:', fibonacciSeries1(3)) // [0, 1, 1] 
console.log('5:', fibonacciSeries1(5)) // [0, 1, 1, 2, 3] 
console.log('7:', fibonacciSeries1(7)) // [0, 1, 1, 2, 3, 5, 8] 

console.log('8:', fibonacciSeries1(8)) // [0, 1, 1, 2, 3, 5, 8, 13]
console.log('1:', fibonacciSeries1(1)) // [0]
console.log('2:', fibonacciSeries1(2)) // [0, 1]


console.log('\n--------TASK07--------\n')
/*Write a function named fibonacciSeries2() which takes a number n argument and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/

const fibonacciSeries2 = n => {
    if(n === 1) return 0
    if(n === 2) return 1

    let secondPrevNum = 0
    let prevNum = 1

    for(let i = 3; i <= n; i++) {
        let fibSum = secondPrevNum + prevNum
        secondPrevNum = prevNum
        prevNum = fibSum
    }
    return prevNum
}

console.log(fibonacciSeries2(2)) // 1
console.log(fibonacciSeries2(4)) // 2
console.log(fibonacciSeries2(8)) // 13
console.log(fibonacciSeries2(9)) // 21
console.log(fibonacciSeries2(1)) // 0



console.log('\n--------TASK08--------\n')
/*Write a function named findUniques() which takes two array of number arguments and returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.
*/

const findUniques = (arr1, arr2) => {
    if(arr1.length === 0 && arr2.length === 0) return []

        let uniqueArr = []

        for(let num of arr1) {
            if(!arr2.includes(num) && !uniqueArr.includes(num)) uniqueArr.push(num)
        }

        for(let num of arr2) {
            if(!arr1.includes(num) && !uniqueArr.includes(num)) uniqueArr.push(num)
        }

         return uniqueArr
}


console.log(findUniques([], [])) // []
console.log(findUniques([], [1, 2, 3, 2])) // [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])) // [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])) // []
console.log(findUniques([-1, -2], [1, 2])) //  [-1, -2, 1, 2]



console.log('\n--------TASK09--------\n')
/*Write a function named isPowerOf3() which takes a number argument and returns true if given number is equal to 3 power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1) 	-> true
isPowerOf3(2) 	-> false
isPowerOf3(3) 	-> true
isPowerOf3(27) 	-> true
isPowerOf3(100) 	-> false
isPowerOf3(81) 	-> true
isPowerOf3(9) 	-> true
*/

const isPowerOf3 = num => {
    for(let i = 1; i <= num; i *= 3) {
       if(num === i) return true
    }
    return false
}


console.log(isPowerOf3(1)) // true
console.log(isPowerOf3(2)) // false
console.log(isPowerOf3(3)) // true
console.log(isPowerOf3(27)) // true
console.log(isPowerOf3(100)) // false
console.log(isPowerOf3(81)) // true
console.log(isPowerOf3(9)) // true

