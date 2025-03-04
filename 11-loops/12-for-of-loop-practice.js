// task 1 - log each name

// for of loop
const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];

for( let name of names) {
    console.log(name);
}

// for loop option 
for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}

/* Task 2
count how many names start with j or J ->
*/

names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
let startsJ = 0;

for(const name of names) {
    if(name.toLowerCase().startsWith('j')) startsJ++
    // or if(name[0].toLowerCase() === 'j') startsJ++
}

console.log(startsJ)


/* TASK 3
count how many names have length of 4
*/

names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];

let countNamesWithLength4 = 0;

for(const name of names) {
    if(name.length === 4) countNamesWithLength4++
}

console.log(countNamesWithLength4)

// for loop
names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
let count4 = 0;

for(let i = 0; i < names.length; i++) {
    if(names[i].length === 4) count4++
}
console.log(count4)


