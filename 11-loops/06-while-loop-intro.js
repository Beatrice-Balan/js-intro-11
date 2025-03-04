/*
Syntax is just like if/ else
*/

while(condition) {
    console.log('Hello')
}

// infinite loop
while(1 === 1) {
    console.log('Hello');
}

// break it :) so it stops the first time the condition is met
while(1 === 1) {
    console.log('Hello');
    break;
}


// print numbers from 1 to 5

for(let i = 1; i <= 5; i++) { // for loop is the best option for this type of task
    console.log(i)
}

// using while loop

let i = 1;

while(i <= 5) {
    console.log(i);
    i++;
}
console.log('End of the program')

