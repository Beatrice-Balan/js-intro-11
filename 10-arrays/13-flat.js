const students = [
    ['A', 'B', 'C'],
    ['X', 'Y', 'Z'],
    ['K', 'L'],
    ['D']
];

console.log(students); // [ [ 'A', 'B', 'C' ], [ 'X', 'Y', 'Z' ], [ 'K', 'L' ], [ 'D' ] ]
console.log(students.flat());
/*[
    'A', 'B', 'C',
    'X', 'Y', 'Z',
    'K', 'L', 'D'
  ]
*/

console.log(students.flat().length); // 9


const numebers = [
    [1, 2, 3],
    [4, 5, [6, 7, [8, 9]]]
];

console.log(numebers);         // [ [ 1, 2, 3 ], [ 4, 5, [ 6, 7, [Array] ] ] ]
console.log(numebers.flat());  // [ 1, 2, 3, 4, 5, [ 6, 7, [ 8, 9 ] ] ]
console.log(numebers.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]
console.log(numebers.flat(3));  /*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]

*/

// you can use this if you don't know how many nested arrays you have 
console.log(numebers.flat(Number.MAX_SAFE_INTEGER));



/*  .flat()
TASK: fattens nested arrays
ARGUMENTS: can take an optional depth argument. 
    NOTE: It removes one level of nesting at a time.     Default is 1
RETURN: new array with all sub-array elements concatenated into it recursively up to the specified depth.
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY? No
*/
