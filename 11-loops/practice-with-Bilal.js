// FOR LOOPS

// 1. Output all odd numebrs from 1 - 10

// this one is better because less code, less math, it just increases by 2 each time
for(let i = 1; i <= 10; i+=2){
    console.log(i)
}

// this one is fine, when you don't have the starting number, but it's much more code
// it goes through the math of adding, then also teh if statement, each time
for(let i = 1; i <= 10; i++){
  if(i % 2 === 1)  console.log(i)
}


// 2. output all numbvers from 1 to random number, between 10-20, both inclusive

let random = Math.floor(Math.random() * 11) + 10
console.log(`Ran num is ${random}`)

for(let i = 1; i <= random; i+=2){
    console.log(i)
}

/* 3. generate a ran num between 1 to 10 (both inclusive)
Find the product of all numebrs starting from 1 to randomly generated number
*/

random = Math.floor(Math.random() * 10) + 1
console.log(random)
let container = 1;

for(let i = 1; i <= random; i++){
    console.log(`multiplying ${container} with ${i} to get ${container *= i}`)
    container *= i;
}

console.log(container)

/* Output: 
7
multiplying 1 with 1 to get 1
multiplying 1 with 2 to get 2
multiplying 4 with 3 to get 12
multiplying 36 with 4 to get 144
multiplying 576 with 5 to get 2880
multiplying 14400 with 6 to get 86400
multiplying 518400 with 7 to get 3628800
25401600
*/


// print all nums between 2 ran nums, 1-10, ascending order

let ran1 = Math.floor(Math.random() * 10) + 1;

let ran2 = Math.floor(Math.random() * 10) + 1;

console.log(ran1, ran2)

for(let i = Math.min(ran1, ran2); i <= Math.max(ran1, ran2); i++){
    console.log(i)
}

// print numebrs in reverse (10 to 0)
for(let i = 10; i >= 0; i--){
    console.log(i)
}



// Outputs each character in reverse
let str1 = "Beatrice";

for (let i = str1.length - 1; i >= 0; i--) {
  console.log(str1[i]); 
}

// Outputs each character in good order
let str2 = "Beatrice";

for (let i = 0; i <= str2.length - 1; i++) {
  console.log(str2[i]); 
}


// reverse string (Bilal -> laliB)

let str = "Beatrice";
let reversedStr = "";

// Loop through the string from the end to the beginning
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr); // Output: "ecirtaeB"
