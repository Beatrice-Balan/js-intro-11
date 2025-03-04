// INTERVIEW QUESTION

const numbers = [1, 2, 3, 10, -7];

console.log(numbers); // [ 1, 2, 3, 10, -7 ]
console.log(...numbers); // 1 2 3 10 -7
// it's like you're individually console logging them, so it takes them out and makes them individual numbers

const winter = ['Dec', 'Jan', 'Feb']
const spring = ['Mar', 'Apr', 'May']
const summer = ['Jun', 'Jul', 'Aug']
const fall = ['Sep', 'Oct', 'Nov']

// const months = winter.concat(spring, summer, fall)

const months = [...winter, ...spring, ...summer, ...fall]
console.log(months)
/* Output:
[
  'Dec', 'Jan', 'Feb',
  'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov'
]
*/


// use case interview

const nums = [ 10, 15, -7, 5, 20 ];
/* find min and max number in array
 - you could use sort, but there are too many performance and memery issues, so they won't like it
Math.max and Math.min does NOT work with arrays, just individual numebrs

*/
console.log(Math.max(...nums)) // 20
console.log(Math.min(...nums)) // -7

// add stuff to array

const products = ['phone', 'MacBook Pro', 'Air Pods']
// products.push('TV) -> this will modify the Original array

/*
const products2 = products;
products2.push('TV');

console.log(products)

this will modify the original array as well
*/

const products2 =[...products, 'TV', 'Projector'];
console.log(products) // [ 'phone', 'MacBook Pro', 'Air Pods' ]
console.log(products2) // [ 'phone', 'MacBook Pro', 'Air Pods', 'TV', 'Projector' ]

// use when you don't want to modify original array, but want a copy with some otehr modifications in it
