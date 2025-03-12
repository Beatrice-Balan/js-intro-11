try {
// your code goes here
// runtime will always attempt to run this block
}
catch(error) {
    // your code to handle the error
    // will be executed Only if there is an error in the try block
}
finally {
    // block to run regardless of whether there is an error or not
}

// variable names for error: e, err, error (mostly used)

// example

try {
    //console.log('Hello', fname)
    console.log('Welcome!')
}
catch(err) {
    console.log('Caught error!')
}
finally {
    console.log('Good bye!')
}

// you can only have 1 "catch" block
// Java, python and otehrs can have more 

// But you CAN have nested try/catch

try {
    console.log('Hello', fname); // ReferenceError because fname is not defined
    try {
        const firstMonth = 'January';
        firstMonth = 'John'; // TypeError because constants cannot be reassigned
    } catch (error) {
        console.log('Inner catch: Error in the inner block');
    }
} catch (error) {
    console.log('Outer catch: Error in the outer block');
}