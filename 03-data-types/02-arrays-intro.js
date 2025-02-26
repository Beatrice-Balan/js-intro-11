/* ARRAYS

- used for multiple strings - names, objects, items, prices etc
- usually used with "CONST"
- used with SQUARE brackets
- if used for numbers, no quotes needed
- we use "CONST" in order to keep the array "safe". This way someone can't just come and change the TYPE OF.
if we use let, we could change a string from a number, or to some other type. 

*/

const studentNames = ['John', 'Alex', 'James', 'Max'] // string array, typeof is object
const numbers = [5, 7, 10, 15];  // number array

console.log(studentNames);
console.log(numbers);

console.log(typeof studentNames); // object

console.log(studentNames.length);


const favoriteMovies = ['Matrix', 'Avangers', 'Fast and Furious'];
console.log(typeof favoriteMovies);
console.log(favoriteMovies);
console.log(favoriteMovies[0]); // gives you the item listed under that index


let secondMovie = favoriteMovies[1]; // access specific element in array
console.log(secondMovie);

console.log(typeof secondMovie);

// to rename a variable, select it, click right, and then rename Symbol

console.log(favoriteMovies[3]); // undefined
console.log(favoriteMovies[-1]); // undefined

console.log(favoriteMovies.length); // how many elements are in an array

// add and update an element to an array

const cities = ['Rome', 'Berlin'];

// update an existing element - change Berlin to Chicago

cities[1] = 'Chicago';  //used to update
console.log(cities); // output [ 'Rome', 'Chicago' ]

cities[2] = 'Miami'; // can be done, not best because you can mis-count index number
console.log(cities);

cities.push('Milan', 'Gent'); // adds elements at the END
console.log(cities);


const ids = [99, 100, 101, 102, 103, 104, 105];

let firstElement = ids[0];
let lastElement = ids[ids.length - 1];  // used for showing the last element

console.log(ids);
console.log(firstElement);
console.log(lastElement);

