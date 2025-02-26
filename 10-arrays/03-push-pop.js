// USED FREQUENTLY

const animals = ['Lion', 'Bird', 'Tiger'];

// i want to add something at the end

/* it works but not the best:
animals[animals.length] = 'Rabbit';
animals[animals.length] = 'Mice';
*/


// push METHOD 

console.log(animals.push('Rabbit')); // 4; returns the length, always adds at the end
let newSize = animals.push('Monkey', 'Fish'); // you can add as many as you'd like at the end

console.log(newSize); // 6
console.log(animals); // returns array Elements

/* .push() METHOD

TASK: adds one or more elements to the END of the array
ARGUMENTS: one or more elements of the same type
RETURN: returns the new LENGTH of the array, so number
STATIC or INSTANCE: Instance, called with the instance of the array, which in this case is animals
DOES IT MODIFY ORIGINAL ARRAY? Yes
*/


// pop METHOD
const numbers = [5, 10, 100, 7, 20];
console.log(numbers.pop()) // 20, the last element that's removed

numbers.pop(); // removes the last element
numbers.pop();

console.log(numbers); // [ 5, 10, ]


/* 
If there is no element in the array -> undefined

TASK: removes the last element in the array
ARGUMENTS: None
RETURN: returns the removed element
    NOTE: If the array is empty it returns -> undefined
STATIC or INSTANCE: Instance, invoked with an instance of the array
DOES IT MODIFY ORIGINAL ARRAY? Yes
*/
