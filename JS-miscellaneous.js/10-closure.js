/*
let initialScore = 0;

function score() {
    initialScore += 1;
}

score();
score();

initialScore = 100;

score();
score();
score();

console.log(initialScore); // 103
*/

function program() {
    let initialScore = 0; // 

    function score() {
        return initialScore += 1;
    }

    return score;
}

const player1Score = program()
const player2Score = program()

player1Score()
console.log(player1Score())
console.log(player2Score())





const scoreMethod = program(); // initialScore = 0;

scoreMethod(); // 1
scoreMethod(); // 2
scoreMethod(); // 3

const result = scoreMethod(); // 4

console.log(result); // 4

/*
so by storing in a variable, we're essentially giving ourselves a way to call the score() function 
from outside the program() function

otherwise we wouldn't be able to call score() again because the program() function 
would be done executing and wouldn't be accessible anymore

*/




























/* Closure:
A closure happens when a function keeps access to variables from its outer function, even after the outer function has finished running.
It’s like the function remembers the environment it was created in.

Example:
*/

function outer() {
    let count = 0;
    
    function inner() {
        count++;
        console.log(count);
    }
    
    return inner; // Returning the inner function
}

const counter = outer(); // outer() finishes, but inner() still "remembers" count

counter(); // Output: 1
counter(); // Output: 2

/*
Even though outer() is finished, inner() still remembers the count variable and can change it. 
This is a closure.
Simple Summary:
Lexical scope: A function can access variables around where it’s written.
Closure: A function remembers the variables from its outer function, even after 
the outer function finishes.
*/