console.log('\n--------TASK01--------\n')
/* TASK 1
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
*/

const countVC = str => {
    const vowels = 'aeiouAEIOU'

    let count = {
        vowels: 0,
        consonants: 0
    }

    for(let char of str) {
        if (vowels.includes(char)) count.vowels++
        else if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') count.consonants++
    }
    return count
}

console.log(countVC("Hello")) // {vowels: 2, consonants: 3}
console.log(countVC("Programming")) // {vowels: 3, consonants: 8}
console.log(countVC("123AbC")) //  {vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz")) // {vowels: 0, consonants: 3}
console.log(countVC("")) // {vowels: 0, consonants: 0}


console.log('\n--------TASK02--------\n')
/* TASK 2
Write a function named countChars() which takes a string argument and returns an object with the count of 
letters, numbers, and specials.

NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards 
any category
*/

const countChars = str => {
    let count = {}

    for (let char of str) {
        if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            count.letters = (count.letters || 0) + 1

        } else if (char >= '0' && char <= '9') {
            count.numbers = (count.numbers || 0) + 1

        } else if (char !== ' ') {
            count.specials = (count.specials || 0) + 1
        }
    }
    return count
}

console.log(countChars("Hello")) // {letters: 5}
console.log(countChars("Programming 123")) // {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#")) // {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321")) // {numbers: 10}
console.log(countChars("    ")) // {}
console.log(countChars("")) // {}

console.log('\n--------TASK03--------\n')
/* TASK 3
Write a function named maxOccurrences() which takes a string argument and returns the character that 
appears the most number of times in the string.

NOTE: If there is a tie, return the first one that appears in the string. This task is case sensitive. 
Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.
*/

const maxOccurrences = str => {
    let strNoSpaces = str.split(" ").join("")

    if(!strNoSpaces) return ''

    let count = {}

    for(let char of strNoSpaces) {
        count[char] = (count[char] || 0) + 1
    }

    let maxChar = strNoSpaces[0]

    for (let char of strNoSpaces) {
        if (count[char] > count[maxChar]) {
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxOccurrences("Hello")) // 1
console.log(maxOccurrences("Occurrences")) // c
console.log(maxOccurrences("    ab    ")) // a
console.log(maxOccurrences("12   3   21")) // 1
console.log(maxOccurrences("      ")) // ""
console.log(maxOccurrences("")) // ""


console.log('\n--------TASK04--------\n')
/* TASK 4
Write a function named starOut() which takes a string argument and returns it back with every star 
removed as well as the right and left of the star.

NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
*/

const starOut = str => {
    let finalStr = ''

    for(let i = 0; i< str.length; i++) {
        if(str[i] !== '*' && str[i - 1] !== '*' && str[i + 1] !== '*') {
            finalStr += str[i]
        }
    }
    return finalStr
}


console.log(starOut("ab*cd")) // ad
console.log(starOut("ab**cd")) // ad
console.log(starOut("xm*sm*sy")) // xy
console.log(starOut("abc")) // abc
console.log(starOut("***")) // ""
console.log(starOut("   ")) // "   "
console.log(starOut(""))// ""



console.log('\n--------TASK05--------\n')
/* TASK 5
Write a function named romanToInt() which takes a string roman numeral as its arguments and return the 
roman numeral converted to the number. 
A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
*/

const romanToInt = str => {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let romanInt = 0

    for( let i = 0; i < str.length; i++) {
          
        let currentValue = romanValues[str[i]]
        let nextValue = romanValues[str[i + 1]]

        if(nextValue && (currentValue < nextValue)) {
            romanInt -= currentValue
        } 
        else {
            romanInt += currentValue
        }
    }
    return romanInt
}

console.log(romanToInt("I")) // 1
console.log(romanToInt("IV")) // 4
console.log(romanToInt("CXII")) // 112
console.log(romanToInt("MMM")) // 3000
console.log(romanToInt("MMMDCCCLXXXVIII")) // 3888
console.log(romanToInt("MDCLXVI")) // 1666

