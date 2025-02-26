/**
 * 
 * @param {*} char must be a single char
 * @returns true if the single character is a digit
 * @returns false if multiple characters are provided
 */

function isDigit(char) {
    return /^\d$/.test(char);
}

function isLowerCase(char) {
    return /^[a-z]$/.test(char);
}

function isUpperCase(char) {
    return /^[A-Z]$/.test(char);
}

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function isSpace(char) {
    return char === ' '
}

function isDigitOrLetter (char) {
    return /^[0-9a-zA-Z]$/.test(char)
}

function isSpecial(char) {
    return !isDigitOrLetter(char) && !isSpace(char)
}
// using regex: return /^[^0-9a-zA-Z\s]$/.test(char)

function isVowel(char) {
    return /^[aeiou]$/i.test(char)
}


// Store all in a single object and export your object

const CharacterHelper = {
    isDigit: isDigit,
    isLowerCase: isLowerCase,
    isUpperCase: isUpperCase,
    isLetter: isLetter,
    isSpace: isSpace,
    isDigitOrLetter: isDigitOrLetter,
    isSpecial: isSpecial,
    isVowel: isVowel
}

module.exports.CharacterHelper = CharacterHelper;
















