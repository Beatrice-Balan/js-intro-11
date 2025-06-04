/* TASK 1
Write a function named toCamelCase() which takes a string as its argument and returns a new string in camelCase. 
Assume the string only contains letters and spaces
Examples:
toCamelCase("first name") 	->"firstName"
toCamelCase("last     name") 	->"lastName"
toCamelCase("   ZIP CODE") 	->"zipCode"
toCamelCase(“I Learn Java Script”)   	-> "iLearnJavaScript"
toCamelCase(“helloWorld”)   ​	-> “helloWorld”
*/

const toCamelCase = str => {
    let words = str.trim().split(' ')

    let camelCaseStr = words[0].toLowerCase()

    if(words.length === 1) return str

    for(let i = 1; i < words.length; i++) {
        if(words[i] !== '') {
            let firstLetterCaps = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
            camelCaseStr += firstLetterCaps
        }
    }
    return camelCaseStr
}

console.log(toCamelCase("first name")) // firstName
console.log(toCamelCase("last    name")) // lastName
console.log(toCamelCase("   ZIP CODE")) // zipCode
console.log(toCamelCase("I Learn Java Script")) // iLearnJavaScript
console.log(toCamelCase("helloWorld")) // helloWorld


/* TASK 2
Write a function named toSnakeCase() which takes a string as its argument and returns a new string in snake_case. 
Assume the string only contains letters and spaces
NOTE: In snake case words are separated by underscores (_) and are all lowercase.
Examples:
toSnakeCase("first name") 	->"first_name"
toSnakeCase("last    name") 	->"last_name"
toSnakeCase("    I love Java Script") 	->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")   		​-> "hello"
*/

const toSnakeCase = str => {
    let words = str.toLowerCase().trim().split(' ').filter(word => word != '')

    if(words.length === 1) return str

    return words.join('_')
}

console.log(toSnakeCase("first name"))
console.log(toSnakeCase("last    name"))
console.log(toSnakeCase("    I love Java Script"))
console.log(toSnakeCase("already_snake_case"))
console.log(toSnakeCase("hello"))


/* TASK 3
Write a function named alternatingCases() which takes a string argument and returns the string with 
alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are ignored.
Examples:
alternatingCases("Hello") 	-> "HeLlO"
alternatingCases("basketball") 	-> "BaSkEtBaLl"
alternatingCases("Tech Global") 	-> "TeCh GlObAl"
alternatingCases("") 		-> ""
alternatingCases("123!@#aB") 	-> "123!@#Ab"
*/

const alternatingCases = str => {
   if(!str.trim()) return ''
    let words = str.split('')

    for(let i = 0; i < words.length; i++) {
        words[i] = (i % 2 === 0) ? words[i].toUpperCase() : words[i].toLowerCase()
    }
    return words.join('')
}

console.log(alternatingCases("Hello")) // "HeLlO"
console.log(alternatingCases("basketball")) // BaSkEtBaLl
console.log(alternatingCases("Tech Global")) // "TeCh GlObAl"
console.log(alternatingCases("")) // ''
console.log(alternatingCases("123!@#aB")) // "123!@#Ab"


/* TASK 4
Write a function named isNeutral() that takes two strings comprised of + and -, and return a new string which 
shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

Note: The two strings will be the same length.
Examples
isNeutral("-", "+")     		->  "0"
isNeutral("-+", "-+") 		->   "-+"
isNeutral("-++-", "-+-+")   ->  "-+00"
isNeutral("--++--", "++--++")  	->  "000000"
isNeutral("+++", "+++")     ->  "+++"
*/

const isNeutral = (str1, str2) => {
    let result = ''

    for(let i = 0; i < str1.length; i++) {
        result += str1[i] === str2[i] ? str1[i] : '0'
    }
    return result
}

console.log(isNeutral("-", "+")) // 0
console.log(isNeutral("-+", "-+")) // "-+"
console.log(isNeutral("-++-", "-+-+")) // "-+00"
console.log(isNeutral("-++-", "-+-+")) // "-+00"
console.log(isNeutral("--++--", "++--++")) // "000000"
console.log(isNeutral("+++", "+++")) // "+++"

/* TASK 5
Write a function named isTrueOrFalse() which takes a string with sets of character/words separated by space.

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), 
you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the 
negative/second half ("n"-"z"). 

Return true if there are more (or equal) positive words than negative words, isTrueOrFalsefalse otherwise.

NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit") 	-> true
isTrueOrFalse("Xylophones can obtain Xenon.")   		->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK") 	-> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe") 	-> true
isTrueOrFalse("Got stuck in the Traffic") 		-> false
*/

const isTrueOrFalse = str => {
    let words = str.toLowerCase().trim().split(' ')
    let posCharCount = 0
    let negCharCount = 0

    for(let word of words) {
        let firstChar = word[0]
        if(firstChar >= 'a' && firstChar <= 'm') posCharCount++
        else if(firstChar >= 'm' && firstChar <= 'z') negCharCount++
    }
    return posCharCount >= negCharCount
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")) // true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")) // false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")) // true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")) // true
console.log(isTrueOrFalse("Got stuck in the Traffic")) // false
