// Add and Remove elements at the beginning of the array

const objects = ['Laptop', 'Remote', 'Pen', 'Camera'];
// console.log(objects.unshift('Mouse')); // 5, returns the new legth of the arary

objects.unshift('Mouse'); //5
objects.unshift('pencil', 'eraser', 'adapter'); // 8

console.log(objects); // returns the array elements


/* 
unshift

TASK: add one or more elements to the beginning of the array
ARGUMENTS: one or more elements
RETURN: new length of the array
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY? Yes
*/


// REMOVE FIRST element

objects.shift(); // 'Pencil'
objects.shift(); // 'Eraser'

console.log(objects); // [ 'adapter', 'Mouse', 'Laptop', 'Remote', 'Pen', 'Camera' ]


/* 
shift

TASK: removes one element from the beginning of the array
ARGUMENTS: none
RETURN: new length of the array
    NONE: if array is empty it will return Undefined
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY? Yes
*/



/*
unshift: add element to teh head of the array -> array becomes longer
shift: removes elements from the head of the arary -> shorter array
*/