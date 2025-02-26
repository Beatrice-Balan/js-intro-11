// Traditional loop =>
// The for loop is a powerful tool for running a block of code a specific number of times.

for(let i = 0; i<= 3; i++) { 
    console.log('Hello');
}

/*
for (initialization; condition; update) {
    // Code to execute repeatedly
}

How It Works:

Initialization: let i = 0; creates a variable i and sets it to 0.
Condition: i < 3; is checked before each iteration. If true, the loop runs.
Code Block: console.log(i); runs and prints the current value of i.
Update: i++ increments i by 1.
After the first loop: i = 1.
After the second loop: i = 2.
After the third loop: i = 3.
On the fourth check, i = 4, and i <= 3 becomes false, so the loop stops.
*/

// remember what  ++ does
let num = 1;

console.log(num++); // 1
console.log(num++); // 2

// EXAMPLE = Print numbers 1-1000. 

// every time the loop runs, we call it iteration
for(num = 1; num <= 10; num++) {
    console.log(num, 'Hello LOOPS!')
}
console.log('End of the program')


for(let i = 0; i < 5; i++) {
    console.log('Hello')
}

/* MISTAKES TO AVOID

Global scope will not allow us to have 2 variables with the same name
let I = 0
let I =2

But, in local scope, "i" is only used within that loop

1. DO NOT use CONST within the loop. It will FAIL, can't update a cosnt value
    for(const i = 0; i < 5; i++) {
    console.log('Hello')
}

2. If you don't add "let" in the loop, it will work, but you should NOT do it
    - by default JS will go with "var"
    - ALWAYS START WITH "let"

3. Semicolon after the for(blah blah); It will NOT work

for(let i = 0; i < 5; i++); {
    console.log('Hello')
}

4. Assign i = 10 and then boolean i <= 5.
    Logical mistake, tehre's no loop to run since i is bigger than the condition

for(let i = 10; i < 5; i++) {
    console.log('Hello')
}

5. INFINITE Loop
     - make sure your condition will become false at some point
     - otherwise your loop will never stop, and yoiur stuff will break

for(let i = 10; i > 1; i++) {
    console.log('Hello')
}

*/











