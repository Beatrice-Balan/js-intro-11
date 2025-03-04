/*
find() returns the first element that passes the 
test in the callback function. If none match, it returns undefined.

returns FIRST matching element and then it stops
*/

array.find(function(element, index, array) {
    // return true for the element to find
  });




// find first even number from array -> 0
const nums = [-1, 1, 3, 0, 2, 6, 8]

let firstEven = nums.find((x) => x % 2 === 0)
let firstPos = nums.find((x) => x > 0)

console.log(firstEven)
console.log(firstEven)

// longer version
firstEven = nums.find(() => {
    return num % 2 === 0
})


/*
findIndex() returns the index of the first element that passes the test in the callback function. 
If none match, it returns -1.
*/

array.findIndex(function(element, index, array) {
    // return true for the element to find
  });

nums = [-1, 1, 3, 0, 2, 6, 8]

firstEven = nums.findIndex((x) => x % 2 === 0)
firstPos = nums.findIndex((x) => x > 0)

console.log(firstEven) // 3 index
console.log(firstPos) // 1 index


// TASK


// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge

// Find the index of LA -> 4
// Find the first element which has i -> Kyiv

// Find the last element that has 4 letters -> Kyiv

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];

console.log(cities.find(city => city.length === 4)); // Rome
console.log(cities.find(city => city.length === 6)); // Berlin
console.log(cities.findIndex(city => city === 'LA')); // 4
console.log(cities.findIndex(city => city.toLowerCase().includes('i'))); // 1

console.log([...cities].reverse().find(city => city.length === 4)); // Kyiv
console.log(cities.toReversed().find(city => city.length === 4)); // Kyiv
// .toReversed() does NOT alter the original array

console.log(cities.findLast(city => city.length === 4)); // Kyiv

console.log(cities.findLastIndex(city => city.length === 4)); // 1

// if find() or findLast() can't find what you're looking for => undefined
// if findIndex() or findLastIndex() can't find what you're looking for => -1
