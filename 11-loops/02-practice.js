/*
Output the numbers from 100 to 0 (both inclusive) -> 100, 99, 98...

start: 100
end: 0
update: --
*/

for(let i = 100; i >= 0; i--) { // boolean can also be i > -1
    console.log(i);
}

/* 2. Print all the even numebrs 0 - 50 -> 0 2 4 6 ... 50
start: 0
end: 50
update: ++
*/

for(let i = 0; i <= 50; i++) { 
    if (i % 2 === 0) console.log(i);
}

// option 2, works only if you know the numbers, you know your start is even 

for(let i = 0; i <= 50; i += 2) {
    console.log(i)
}

/* 3. Print all the numebrs divisible by 5, numebrs 0 - 50 -> 0 5 10 ... 50
start: 0
end: 50
update: ++
*/

for(let i = 0; i <= 50; i++) { 
    if (i % 5 === 0) console.log(i);
}

// option 2, works only if you know the numbers/ your start 

for(let i = 0; i <= 50; i += 5) {
    console.log(i)
}

/* 4. Find the sum of numbers between 1 to 5 (both inclusive) ->

with no loop:
let sum = 0 
let start = 1

sum += start++; // start = 1, sum = 1
sum += start++; // start = 2, sum = 3
sum += start++; // start = 3, sum = 6
sum += start++; // start = 4, sum = 10
sum += start++; // start = 5, sum = 15

console.log(sum);

sum += 1 means sum = sum + i
*/

let sum = 0;

for(let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);


// 5. sum of numbers between 10 to 15 (both inclusive) -> 75


let sum1 = 0;

for(let i = 10; i <= 15; i++) {
    sum1 += i;
}
console.log(sum1);

/* 6. 
Product of numbers from 1 to 6 -> 720
*/

let product = 1;

for(let i = 2; i <= 6; i++) { // i = 2 because if i = 1 wont make a difference when you do 1 * 1
    product *= i;
}
console.log(product);

/* 6. 
Print all the separate letters: TechGlobal school
*/

let str = 'TechGlobal School'

for(let i = 0; i < str.length; i++) { // or i <= str.length - 1
    console.log(str[i])
}


/* 7. 
count how many a letters we have in the below string -> 3
*/

let fruits = 'banana';
let letterA = 0;

for(let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'a') {
        letterA++;
    }
}

console.log(letterA);



/* 8. 

*/