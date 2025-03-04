// example, print the items in the array
const names = ['John', 'Jane', 'Alex', 'Mariia']

for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}

console.log('End of the program')


// count how many even numebrs we have below
const numbers = [2, 5, 6, 3, -1, 10, 8]

let evenNumCount = 0

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) evenNumCount++
}

console.log(evenNumCount)