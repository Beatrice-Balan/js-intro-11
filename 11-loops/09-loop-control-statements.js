// break: completely terminates the loop
// continue: skips the current iteration

// you want to print all numbers between 1-15 EXCEPT 6:

for(let i = 1; i <= 15; i++) {
    if(i !== 6) console.log(i);
}

// you would use continue this way, but not pref, too long, no point
for(let i = 1; i <= 15; i++) {
    if(i === 6) continue; // skips when i is 6
        else console.log(i);
}

// let's say you don't want 2 digit numbers to be printed
// even tho your loop runs o 15, you wion't see it printed
for(let i = 1; i <= 15; i++) {
    if(i < 10) console.log(i);
}

// better than previous logic, because it stops the loop completely
// it doesn't keep going when there's no point
for(let i = 1; i <= 15; i++) {
    if(i === 10) break; // 'break' will terminate the loop when i becomes 10
        else console.log(i);
}


// example
// create a new array with first 2 even numbers in the array below -> expected output: [2, 10]
// once you get the first 2 even numbers, no point on going on and checking everything else, move on

const arr = [1, 2, 10, 20, 25, 50, 3, 1]

const result = [];

for(let i = 0; i < arr.length; i++) {
   if(arr[i] % 2 === 0) {
    result.push(arr[i]);
   }

   if(result.length === 2) {
    break;
   }
}

console.log(result) // [ 2, 10 ]



// example. real usage of loops with data from me and server

const expectedNavItems = ['Home', 'Courses', 'Blog', 'About', 'Contact']

// imagine this custom func - getTGNavItems() - gives you what's on the website (returns array of elements):

if(getTGNavItems().length !== 5) console.log('Test Failed')

// my goal is to see if that everything matches
for(let i = 0; i < getTGNavItems().length; i++) {
    getTGNavItems()[i].getText === expectedNavItems[i]
}



