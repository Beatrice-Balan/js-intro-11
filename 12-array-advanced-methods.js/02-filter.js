/*
filter() creates a new array containing elements that 
pass the test defined in the provided function.
*/

array.filter(function(element, index, array) {
    // return true to keep the element
  });
  


// get all the names that have 4 characters

names = ['Mariia', 'Alex', 'John', 'Jane', 'Victoria'];

const namesWith4Chars = names.filter((name) => name.length === 4); 
console.log(namesWith4Chars); // returns array


// if you want to console log each name

names.filter((name) => name.length === 4).forEach((x) => console.log(x))


// how many names have 'a' or 'A' in them: 4

names = ['Mariia', 'Alex', 'John', 'Jane', 'Victoria'];

const namesIncludingA = names.filter((name) => name.toLowerCase().includes('a'))

console.log(namesIncludingA.length) 
// when counting it's preferred to use reduce


// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

const numbers = [10, 5, 100, 77, 50, 65, 0];

console.log(numbers.filter((number) => number >= 50))



const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4    -> reduce() method preferred
// Count how many elements has i      -> 2    -> reduce() method preferred


const fruitsWithApple = fruits.filter((fruit) => fruit.toLowerCase().includes('apple'));
console.log(fruitsWithApple); // ['Apple', 'Red apple', 'Pineapple']

const fruitsWithA = fruits.filter((fruit) => fruit.toLowerCase().includes('a'));
console.log(fruitsWithA.length); // 4

console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('i')).length);


