// RANDOM METHOD

Math.random(); // RANDOM NUMBER BETWEEN 0 AND 1 (WITH 1 EXCLUDED)


// generate a random number between 3 and 5 both inclusive

let result = Math.floor(Math.random() * 3) + 3;
console.log(result);

/*
find a random number between a and b (both inclusive)
1. calculate how many numbers you have in the range.
bigger number - smaller number + 1

example: between 5 and 17 inclusive there are 13 numbers
- to find them if both inclusive: bigger number - smaller number + 1 (17-5+1 = 13)

let count = bigger number - smaller number + 1

2. Multiply the "count" you found with Math.random()
result = Math.random() * count

3. Floor teh result using Math.floor() method
newResult = Math.floor(result)

4. Add your smaller number to newresult

finalResult = newResult + smallerNumber

let result = Math.floor(Math.random() * (max - min + 1)) + min;

*/

let resultRANDOM = Math.floor(Math.random() * (max - min + 1)) + min;

// Generate random number between 6 and 10 both inclusive
let r1 = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
console.log(r1);

// LOOP for 100 random numbers
for(let i = 0; i < 100; i++) {
    let r1 = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
    console.log(r1);  
}

// IF YOU WANT TO USE Math.ceil() decrease the final + number by 1:
Math.ceil(Math.random() * (max - min + 1)) + min - 1;


// IF YOU WANT TO USE Math.round() decrease the number difference
Math.round(Math.random() * (max - min)) + min;

// generate random number between num1 and num2 both inclusive. You DON"T know which one is bigger or smaller
// in that case you use the Math.max() and Math.min() formula

let num1;
let num2;

let max = Math.max(num1, num2);
let min = Math.min(num1, num2);

Math.floor(Math.random() * (max - min + 1)) + min;



function firstTwoCharacters(str) {
    if(str.length < 2) return str
    return str.slice(0, 2)
  }
  
  console.log(firstTwoCharacters('Tech'))
  console.log(firstTwoCharacters('Gl'))













