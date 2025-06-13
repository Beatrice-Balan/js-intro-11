
console.log('\n--------TASK01--------\n')
/* 
Write a function named findMedian() which takes two arrays of numbers as its arguments and return the median of the two sorted 
arrays. 

NOTE: The median is the middle number of a sorted array. So the median of [1,3], [2] would be 2. If the array has an even 
length, you are to find the average of the 2 middle numbers
*/

const findMedian = (arr1, arr2) => {
    const mergedSortedArr = [...arr1, ...arr2].sort((a, b) => a - b)
    const arrLength = mergedSortedArr.length

    if(arrLength % 2 === 0 ) {
        const middle1 = mergedSortedArr[(arrLength / 2) - 1]
        const middle2 = mergedSortedArr[arrLength / 2]
        return (middle1 + middle2) / 2
    }
    else {
        return mergedSortedArr[Math.floor(arrLength / 2)]
    }
}


console.log(findMedian([1, 3], [2])) // 2
console.log(findMedian([1, 2], [3, 4])) // 2.5
console.log(findMedian([4], [3])) // 3.5
console.log(findMedian([4], [])) // 4
console.log(findMedian([0], [0,1])) // 0


console.log('\n--------TASK02--------\n')
/* 
Write a function named calculateFactorial() which takes a number as an argument and returns the factorial of that number.

Note: Factorial is the product of all positive integers less than or equal to a given positive integer and denoted by that 
integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. 

Factorial zero is defined as equal to 1.
*/

// long way
// const calculateFactorial = num => {
//     if(num === 0 || num === 1) return 1

//     let factorial = 1

//     for(i = 2; i <= num; i++) {
//         factorial *= i
//     }

//     return factorial
// }


const calculateFactorial = num => num === 0 || num === 1 ? 1 : num * calculateFactorial(num - 1)

console.log(calculateFactorial(0)) // 1
console.log(calculateFactorial(1)) // 1
console.log(calculateFactorial(5)) // 120
console.log(calculateFactorial(6)) // 720
console.log(calculateFactorial(10)) // 3628800
console.log(calculateFactorial(4)) // 24


console.log('\n--------TASK03--------\n')
/* 
Write a function named calculateGCD() which takes two numbers as arguments and returns the greatest common divisor of the 
two numbers.

NOTE: GCD is a mathematical concept used to describe the largest number that divides two or more integers without leaving 
a remainder. In other words, it is the largest number that is a common factor of two or more numbers.
*/

// If n2 is not 0, the function calls itself with n1 replaced by n2, and n2 replaced by remainder of n1 % n2, to find the remainder of the division between the two numbers

const calculateGCD = (n1, n2) => n2 === 0 ? n1 : calculateGCD(n2, n1 % n2)


console.log(calculateGCD(8, 12)) // 4
console.log(calculateGCD(17, 5)) // 1
console.log(calculateGCD(48, 18)) // 6
console.log(calculateGCD(0, 5)) // 5
console.log(calculateGCD(21, 14)) // 7
console.log(calculateGCD(60, 48)) // 12


console.log('\n--------TASK04--------\n')
/* 
Write a function named calculateLCM() which takes two numbers as arguments and returns the least common multiple of the 
two numbers.

NOTE: LCM is a mathematical concept used to describe the largest number that divides two or more integers without leaving 
a remainder. In other words, it is the largest number that is a common factor of two or more numbers.

Examples:
calculateLCM(8, 12) 	-> 24
calculateLCM(17, 5) 	-> 85
calculateLCM(48, 18) 	-> 144
calculateLCM(0, 5) 	-> 0
calculateLCM(21, 14) 	-> 42
calculateLCM(60, 48) 	-> 240
*/


const calculateLCM = (n1, n2) => {
    if(n1 === 0 || n2 === 0) return 0
    
    const calculateGCD = (n1, n2) => n2 === 0 ? n1 : calculateGCD(n2, n1 % n2)

    return Math.abs(n1 * n2 ) / calculateGCD(n1, n2)
}


console.log(calculateLCM(8, 12)) // 24
console.log(calculateLCM(17, 5)) // 85
console.log(calculateLCM(48, 18)) // 144
console.log(calculateLCM(0, 5)) // 0
console.log(calculateLCM(21, 14)) // 42
console.log(calculateLCM(60, 48)) // 240