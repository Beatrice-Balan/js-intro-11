console.log('\n--------TASK01--------\n')
/* TASK 1
Write a function named calculateTotalPrice1() which takes an object of some shopping items with their 
quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25

Examples:
calculateTotalPrice1({ apple: 3, mango: 1 }) 			-> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }) 		-> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }) 		-> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 }) 	-> 12.24
*/

const calculateTotalPrice1 = obj => {
    const products = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    let totalPrice = 0

    for(let item in obj) {
        let price = products[item] || 0

        totalPrice += obj[item] * price
    }

    return totalPrice
}


console.log(calculateTotalPrice1({ apple: 3, mango: 1 })) // 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })) // 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })) // 0
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })) // 12.24

console.log('\n--------TASK02--------\n')
/* TASK 2
Write a function named calculateTotalPrice2() which takes an object of some shopping items with their 
quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25

Note: There will be some discounts as below​.
There will be %50 discount for every second Apple​
There will be 1 free Mango if customer gets 3. So, fourth one is free.

Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 }) 			-> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 }) 		-> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 }) 		-> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 }) 	-> 29.51
*/

const calculateTotalPrice22 = obj => {
    const inventory = {
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    }

    let totalPrice = 0

    const applePriceCalc = quantity => {
        let halfPriceApples = Math.floor(quantity / 2)
        let fullPriceApples = quantity - halfPriceApples

        return (fullPriceApples * inventory.Apple) + (halfPriceApples * (inventory.Apple / 2))
    }

    const mangoPriceCalc = quantity => {
        let fullPriceMangos = quantity - Math.floor(quantity / 4)
        
        return fullPriceMangos * inventory.Mango
    }

    for(let item in obj) {
        let quantity = obj[item]
        let price = inventory[item] || 0

        if(item === 'Apple') {
            totalPrice += applePriceCalc(quantity, inventory)
        } 
        else if(item === 'Mango') {
            totalPrice += mangoPriceCalc(quantity, inventory)
        } 
        else {
            totalPrice += quantity * price
        }
    }

    return totalPrice.toFixed(2)
}

// better

const calculateTotalPrice2 = items => {
    const prices = {
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    };

    let total = 0;
  
    for(let item in items){
  
        const noSale = items[item] * prices[item]
        let sale = 0;
  
        if(item === 'Apple') sale = (Math.floor(items[item] / 2) * prices[item]) / 2
        else if(item === 'Mango') sale = (Math.floor(items[item] / 4) * prices[item])
            
        total += noSale - sale;
        
    }
    return total === 0 ? total : total.toFixed(2)
  }


  


console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })) // 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })) // 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })) // 0
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })) // 29.51


console.log('\n--------TASK03--------\n')
/* TASK 3
Write a function named nthWord() which takes a string and a number arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater than the count of the words in the given string.

Examples:
nthWord("I like programming languages", 2) 	-> "like"
nthWord("QA stands for Quality Assurance", 4)​ 	-> "Quality"
nthWord("Hello World", 3) 		-> ""
nthWord("Javascript", 1) 			-> "Javascript”
nthWord("", 1) 			-> ""
*/

const nthWord1 = (str, num) => {
    const words = str.split(' ')
    return words.length < num ? '' : words[num - 1]
}

// better
const nthWord = (str, num) =>  str.split(' ')[num-1] || ""


console.log(nthWord("I like programming languages", 2)) // like
console.log(nthWord("QA stands for Quality Assurance", 4)) // Quality
console.log(nthWord("Hello World", 3)) // ""
console.log(nthWord("Javascript", 1)) // Javascript”
console.log(nthWord("", 1)) // ""


console.log('\n--------TASK04--------\n')
/* TASK 4
Write a function named isArmstrong() which takes a number argument and returns true if given number is armstrong, return false otherwise.​
Note: An armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.

In other words, an n-digit number is an Armstrong number if the sum of its digits, each raised to the nth power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153.​

To determine if 153 is an armstrong number, we need to check if the sum of its digits, each raised to the power of the number of digits, equals the original number.​
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​
In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) is equal to the original number, which means 153 is an armstrong number.

Examples:
isArmstrong(153) 	-> true
isArmstrong(123) 	-> false
isArmstrong(1634) 	-> true
isArmstrong(153) 	-> true
isArmstrong(1111) 	-> false
*/

//loop
const isArmstrong1 = num => {
    let digits = String(num).split('')
    let power = digits.length
    let sum = 0

    for(let digit of digits) {
        sum += Math.pow(digit, power)
    }

        return num === sum
}

// reduce
const isArmstrong = num => {
    let digits = String(num).split('')
    let power = digits.length
    
    let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0)

    return num === sum
}

// one line
// const isArmstrong = num => num.toFixed().split('').reduce((total, i) => total + Math.pow(i,num.toFixed().length), 0) === num

console.log(isArmstrong(153)) // true
console.log(isArmstrong(123)) // false
console.log(isArmstrong(1634)) // true
console.log(isArmstrong(153)) // true
console.log(isArmstrong(1111)) // false


console.log('\n--------TASK05--------\n')
/* TASK 5
Write a function named reverseNumber() which takes a number argument and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.

Examples:
reverseNumber(371) 	-> 173
reverseNumber(123) 	-> 321
reverseNumber(12) 	-> 21
reverseNumber(0) 	-> 0
reverseNumber(111) 	-> 111
*/

const reverseNumber1 = num => {//123
    let reversedNum = 0 // 3
                        // 32

    while (num > 0) {
        let lastDigit = num % 10 // 3 // 2 // 1
        reversedNum = reversedNum * 10 + lastDigit // 0 * 10 + 3 
                                                    // 3 * 10 + 2 = 32
                                                    // 32 * 10 + 1 = 321

        num = Math.floor(num / 10) // 123 / 10 = 12.3 => floored is 12 
                                    // 12 / 10 = 1.2 => foored 1
    }

    return reversedNum
}

// better
const reverseNumber = num => {
    let reversed = 0;
    for(let i = num; i > 0;  i = Math.floor(i / 10)){
        reversed = (reversed * 10) + (i % 10);
    }
    return reversed;
}

console.log(reverseNumber(371)) // 173
console.log(reverseNumber(123)) // 321
console.log(reverseNumber(12)) // 21
console.log(reverseNumber(0)) // 0
console.log(reverseNumber(111)) // 111



console.log('\n--------TASK06--------\n')
/* TASK 6
Write a function named doubleOrTriple() which takes an array of numbers as argument and a boolean value. 
It will return the array elements doubled if true or tripled if the boolean value is false.​

Examples:
doubleOrTriple([1, 5, 10], true) 	-> [2, 10, 20]
doubleOrTriple([3, 7, 2], false) 	-> [9, 21, 6]
doubleOrTriple([-1, -2], true) 	-> [-2, -4]
doubleOrTriple([0], false) 	-> [0]
doubleOrTriple([-1, 0, 1], true) 	-> [-2, 0, 2]
*/

const doubleOrTriple1 = (arr, bool) => arr.map(num => bool ? num * 2 : num * 3)
const doubleOrTriple = (arr, isDouble) => isDouble ? arr.map((el) => el * 2) : arr.map((el) => el * 3)

console.log(doubleOrTriple([1, 5, 10], true)) // [ 2, 10, 20 ]
console.log(doubleOrTriple([3, 7, 2], false)) // [ 9, 21, 6 ]
console.log(doubleOrTriple([-1, -2], true)) // [ -2, -4 ]
console.log(doubleOrTriple([0], false)) // [ 0 ]
console.log(doubleOrTriple([-1, 0, 1], true)) // [ -2, 0, 2 ]


console.log('\n--------TASK07--------\n')
/* TASK 7
Write a function named splitString() which takes a string and a number arguments and returns the string back 
split by the given number. 
Note: Return empty string if the string shorter than splitting number or the string length is 
not divisible by the given number.

Examples:
splitString("JavaScript", 5) 	-> "JavaS cript"
splitString("Java", 2) 		-> "Ja va"
splitString("Automation", 3) 	-> ""
splitString("Hello", 6) 		-> ""
splitString("12", 1) 		-> "1 2"
*/

const splitString = (str, num) => {
    if(num > str.length || str.length % num !== 0) return ''

    let splitString = ''

     for(let i = 0; i < str.length; i+=num) {
        splitString += str.slice(i, (i + num)) + ' '
     }

     return splitString.trim()
}

// this only works for 2 splits
//const splitString1 = (str, num) => (str.length % num !== 0 || num > str.length) ? '' : str.slice(0, num) + ' ' + str.slice(num)


const splitString = (str, num) => {
    if(num > str.length || str.length % num !== 0) return ''

    let result = ''

     while(str.length > 0) {
        result += str.slice(0, num) + ' '
        str = str.slice(num)
     }

     return splitString.trim()
}


console.log(splitString("JavaScript", 5)) // JavaS cript
console.log(splitString("JavaScript", 2)) // JavaS cript
console.log(splitString("Java", 2)) // Ja va
console.log(splitString("Automation", 3)) // ""
console.log(splitString("Automation", 2)) // Au to ma ti on
console.log(splitString("Automation", 5)) // Autom ation
console.log(splitString("Hello", 6)) // ""
console.log(splitString("12", 1))  // "1 2"

