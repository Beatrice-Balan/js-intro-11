/* A Promise in JavaScript is a built-in object that represents the eventual completion (or failure)
of an asynchronous operation and its resulting value. 
It provides a way to handle asynchronous tasks in a more manageable and readable manner compared 
to traditional callback functions.

Key Features of Promises:
States:

Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
Methods:

.then(): Executes a callback when the promise is fulfilled.
.catch(): Executes a callback when the promise is rejected.
.finally(): Executes a callback after the promise settles (fulfilled or rejected).

Creation: You create a promise using the new Promise() constructor, which takes a function (executor)
 with two arguments: resolve and reject.
*/

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('RESOLVED')
    }, 2000)
})

console.log(p)