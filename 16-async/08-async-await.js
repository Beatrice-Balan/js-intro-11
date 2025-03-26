function connectToServer() {
    return new Promise((resolve, reject) => {
        const bool = false
        if(bool) {
            console.log('Connection successful!')
            resolve()
        }
        else {
            console.log('Connection failed!')
            reject('ERROR the connection has failed')
        }
    })
}

// you can use this
async function test1() {
    try {await connectToServer()
    }
    catch(err) {
        console.log(err)
    }
}

test1()

// or this
function test2() {
    connectToServer()
    .then(() => {})
    .catch((err) => console.log(err))
}

test2()

// Whichever one you like

/* Both async/await with try...catch and .then()/.catch() have their pros and cons, and which one is "better" 
depends on the situation. 

However, async/await with try...catch is generally recommended for most modern JavaScript code due to the following reasons:

async/await with try...catch

Advantages:
1. Cleaner and More Readable:

It looks more like synchronous code, which makes it easier to read, understand, and follow.
It allows for writing asynchronous code in a sequential manner, avoiding the "callback hell" 
or "pyramid of doom" effect that often happens with .then() chains.

2. Easier Error Handling:

With try...catch, you can handle errors in a more centralized and structured way, especially if multiple await 
calls are involved.
You can catch any errors that occur inside the try block, whether they’re from the awaited Promises or 
other synchronous code.

3. Better for Complex Logic:

If you have multiple asynchronous operations that need to be executed sequentially or if you need to handle errors 
at multiple points, async/await makes the code cleaner and easier to reason about.

Disadvantages:
async/await is supported in modern environments, but older environments may require a transpiler like Babel to use it. 
However, this is generally not an issue for most developers today as modern browsers and Node.js support it.


.then()/.catch()

Advantages:

1. Promise Chaining:

.then() allows for chaining multiple promises together, and .catch() is used to catch errors at the end of the chain.
This can be useful when you need to perform many operations in a sequence, and each .then() is connected in a chain of operations.

2. Better for Simple Operations:

If you are dealing with just one or two asynchronous tasks, .then()/.catch() can be compact and effective.


Disadvantages:

1. Less Readable:

As you chain more promises, the code can become harder to read and manage, especially when 
you have nested promises or multiple .then() calls.

Deeply nested .then() blocks may make it harder to trace the flow of your program, 
leading to what is known as "callback hell" or "pyramid of doom."

2. Error Handling Is More Cumbersome:

You can only handle errors for the entire promise chain with .catch(). 
If you need to handle errors for specific steps in the chain, it requires more work, such as adding .catch() at various points.

CONCLUSION:
Use async/await with try...catch for most cases, especially when:

- You have complex logic with multiple asynchronous steps.
- You want your code to be more readable, sequential, and easier to debug.
- You're dealing with multiple await calls or nested async code.

Use .then()/.catch() when:
- The asynchronous logic is simple and doesn't involve many operations in sequence.
- You’re working with code that doesn’t require catching multiple errors or handling complex workflows.

Overall, async/await is generally considered more modern, more readable, and easier to work with in most cases, 
and is the recommended approach for handling asynchronous code in JavaScript today.
*/