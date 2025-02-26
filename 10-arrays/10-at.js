const arr = ['mouse', 'laptop', 'keyboard', 'camera'];

// first and last element in the array
arr[0]
arr[arr.length - 1]; // better: arr.at(-1)

// second and the second from the last
arr[1]; // 2nd element
arr[arr.length - 2]; // second from the last
arr.at(-2) // better, shorter


//Find the average of the first and last element in the below array

const numbers = [5, 7, 12, 15];

console.log((numbers[0] + numbers.at(-1)) / 2)


/* .at()
TASK: retreive elements at specified index
ARGUMENTS: takes a numberas an index
    NOET: works with negative indexes, counting backwords
RETURN: an element found at specified index
    NOTE: if there is no element at specified index, it returns ubndefined
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY? No
*/

// [index] access vs at(index)

console.log([1, 2, 3].at(1)) // 2
console.log([1, 2, 3][1]) // 2

console.log([1, 2, 3].at(-1)) // 3
console.log([1, 2, 3][-1]) // undefined

console.log([1, 2, 3].at(5)) // undefined
console.log([1, 2, 3].at(-5)) // undefined
console.log([1, 2, 3][5]) // undefined