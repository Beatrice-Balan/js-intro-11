// Why do we need try-catch
/* We need try-catch in JavaScript to handle runtime errors gracefully and prevent 
the entire program from crashing. 

It allows us to catch errors that occur during code execution and take appropriate 
action, such as logging, cleaning up resources, or providing a user-friendly message.

Without error handling, an unhandled error can stop the execution of your program. 
try-catch ensures your application can continue running, even when an error occurs in part of your code.

Some errors are expected in certain situations, like invalid user input or network issues. 
try-catch lets you handle those gracefully.
*/

try {
console.log(fname);
}
catch(error) {
    console.log(`You have an issue here: ${error}!!`)
    console.log(`The error message is: ${error.message}!!`)
}

console.log('Rest of the program!')



