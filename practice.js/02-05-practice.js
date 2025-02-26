/* Task01
Requirement:
Write a function named as tripleWord() which takes a string word as an
argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
tripleWord("Tech")  -> "TechTechTech"
tripleWord("Global")  -> "GlobalGlobalGlobal"
*/

function tripleWord(string) {
    return string.repeat(3)
}

console.log(tripleWord('Tech'));

// arraow

const tripleWord1 = word => word.repeat(3);
const tripleWord2 = word => word + word + word;

/* Task02
Write a function named as has4() which takes a string word as an argument and returns true 
if given string has at least 4 characters, and false otherwise when invoked.
 Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false
*/

function has4(word) {
    return word.length >= 4
}

console.log(has4('Tech'));
console.log(has4('abc'));

// arrow function:

const has4_1 = word => {
    return word.length >= 4
}

/* Task 03
Write a function named as celciusToFahrenheit() which takes a number
to be considered as Celcius value and returns the Fahrenheit value when
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celciusToFahrenheit(20)  -> 68
celciusToFahrenheit(25)  -> 77
celciusToFahrenheit(0)  -> 32
celciusToFahrenheit(-10)  -> 14
*/

// traditional function
function celsiusToFahrenheit(celsius) {
    return (celsius * 9)/ 5 + 32
}

console.log(celsiusToFahrenheit(20));

// arrow function
const celsiusToFahrenheit = celsius => (celsius * 9) / 5 + 32;

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(-40)); // -40
console.log(celsiusToFahrenheit(30)); // 86

/* Task 04
Write a function named as kgToPounds() which takes a number to be
considered as Kilograms value and returns the Pounds value when
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220
*/

function kgToPounds(kg) {
    return (kg * 2.2)
}

console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(kgToPounds(100)); // 220.00000000000003

// you can use toFixed(2) but then all teh results will have .00 at the end
// use this to 

function kgToPounds(kg) {
    let pounds = (kg * 2.2).toFixed(2);
    if (pounds.endsWith('.00')) {
        return parseFloat(pounds)
    } else {
        return pounds
    }
}

console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(kgToPounds(100));

function kgToPounds(kg) {
    let pounds = (kg * 2.2).toFixed(2);
    return pounds.endsWith('.00') ? parseFloat(pounds) : pounds
    }
    console.log(kgToPounds(1));
    console.log(kgToPounds(20));
    console.log(kgToPounds(75));
    console.log(kgToPounds(100));



function kgToPounds(kg) {
     let pounds = (kg * 2.2).toFixed(2);
        return parseFloat(pounds)
    }
    
    console.log(kgToPounds(1));
    console.log(kgToPounds(20));
    console.log(kgToPounds(75));
    console.log(kgToPounds(100));


    function kgToPounds(kg) {
        let pounds = kg * 2.2;
        return (pounds % 1 === 0) ? parseFloat(pounds) : parseFloat(pounds.toFixed(2));
    }
    
    console.log(kgToPounds(1));    // Outputs: 2.20
    console.log(kgToPounds(20));   // Outputs: 44
    console.log(kgToPounds(75));   // Outputs: 165
    console.log(kgToPounds(100));  // Outputs: 220


/* Task 05
Write 2 functions named as rectangleArea() and rectanglePerimeter()
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60

rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32

*/

function rectangleArea (x, y) {
    return x * y
}
console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));

function rectangleArea (x, y) {
    return (2 * (x + y))
}
console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));


/* task 06
Write 2 functions named as squareArea() and squarePerimeter() which
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x
Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
squarePerimeter(6)  -> 24
*/

function squareArea(side) {
    return side * side
}

// or use: return side.pow(2)
// or: return side **2

console.log(squareArea(5));
console.log(squareArea(3));


function squarePerimeter(side) {
    return 4 * side
}

console.log(squarePerimeter(5));
console.log(squarePerimeter(3));

/* Task 07

Function count how many words are in a sentence

*/

function countWords(string) {
    let words = string.split(' ')
    return words.length
}

console.log(countWords('Hello, my name is John Doe'));

// arrow
const countString = str => {
    let strAsArray = str.trim().split(/\s+/);
    return strAsArray.length;
}
// another regex (regular expression) /[ ]+/

console.log(countString('       Hello, My       name   is        John Doe'));