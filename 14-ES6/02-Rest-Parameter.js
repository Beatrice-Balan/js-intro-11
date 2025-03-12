// example

Math.max(2, 3) // 
Math.max(3, 10, 6) //10
Math.max(7, 2, 10, 15, 3, 2) // 15


/* you're not going to add a billion parameters like:
n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0)

*/

function sum(...args) { // rest parameter collects all the args and stores in an array
    let result = 0
    for(const arg of args) {
        result += arg
    }
    return result
}


console.log(sum()) // 0 (no arg)
console.log(sum(5)) // 5
console.log(sum(5, 2)) // 7
console.log(sum(10, 5, 2)) // 17
console.log(sum(2, 1, 5, 10, 5, 2, 10)) //30


// using reduce

function sum(...args) { // rest parameter collects all the args and stores in an array
    return args.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum()) // 0 (no arg)
console.log(sum(5)) // 5
console.log(sum(5, 2)) // 7
console.log(sum(10, 5, 2)) // 17
console.log(sum(2, 1, 5, 10, 5, 2, 10)) //30


// EXAMPLE 2

function printArgs(...values) {
    for(const value of values) {
        console.log(value)
    }
}

// for each

function printArgs(...values) {
    values.forEach(x => console.log(x))
}

printArgs('John', 3, null, undefined)


// You only have some of the args. First one

function greet(greet, ...values) {
    console.log(`${greet}, ${values}!`)
}

greet('Hi', 'John')
greet('Hello', 'John', 'Jane')
greet('Good morning', 'John', 'Jane', 'Mariia')


// BEFORE ES6 - arguments object (see below, but now we use ...rest)
// arguments object - array-like object

function product() {
    if(arguments.length === 0) return 0;
    let result = 1
    for(const value of arguments) {
        result *= value
    }
    return result
}

console.log(product())
console.log(product(5))
console.log(product(5, 2))
console.log(product(5, 2, 4))
console.log(product(3, 5, 2, 4))