// most times this is used with arrays

const objects = ['Pen', 'Eraser', 'Board', 'Paper']

/* print each object
for(let i = 0; i < objects.length; i++) { // i is 0 1 2 3
    objects[i] // prints each object based on index, from 1 to 3
}
*/
// you Can use for loop to iterate arrays but for...of loop is better


// HOW MANY START WITH p
let countStartP = 0
for(let object of objects) {
    if(object.startsWith('P')) countStartP++
}

console.log(countStartP)

// you can use all the Number methods if the all the array elements are numbers
// if they're a string, use all the string methods

const salaries = [1200.32542, 1500.345, 3000.349857]

for(salary of salaries) {
    console.log(salary.toFixed(2))
}


const students = [
{
    fName: 'John',
    age: 25
},
{
    fName: 'Jane',
    age: 24
}
];

for(const student of students) {
    console.log(student.fName, student.age)
}
