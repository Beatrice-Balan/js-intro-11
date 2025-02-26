const numbers = [1, 2, 3];

const newNumbers = numbers.reverse()

console.log(newNumbers) // [ 3, 2, 1 ]
console.log(numbers) // [ 3, 2, 1 ]

// It modifies the original array, so it will be reversed

// What if i need both my original array as well as the reverse version?

const arr = ['Jane', 'John', 'Alex']
const arr2 = new Array(...arr)

console.log(arr2.reverse())
console.log(arr)

arr[0] // 'Alex', but you still want to get 'Jane' the first from the original array

/* 

TASK: reverses the array
ARGUMENTS: None
RETURN: returns the same array with modifications
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY? YES
*/