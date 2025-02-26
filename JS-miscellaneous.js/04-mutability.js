// Primitives are immutable
let num1 = 10
let num2 = num1

console.log(num1) // 10
console.log(num2) // 10

num2 = 11

console.log(num1) // 10
console.log(num2) // 11

// references are mutable

const arr1 = [1, 2, 3];
const arr2 = arr1

console.log(arr1) // [ 1, 2, 3 ]
console.log(arr2) // [ 1, 2, 3 ]

arr1.pop();

console.log(arr1) // [ 1, 2 ]
console.log(arr2) // [ 1, 2 ]



const table1 = {
    material: 'wood',
    color: 'brown'
};

const table2 = table1;

console.log(table1) // { material: 'wood', color: 'brown' }
console.log(table2) // { material: 'wood', color: 'brown' }

table1.material ='granite'

console.log(table1) // { material: 'granite', color: 'brown' }
console.log(table2) // { material: 'granite', color: 'brown' }


// How can i have an independent copy of reference types

// Shallow copy -> using spread operator

const testAccount = {
    username: 'TestTech123',
    password: 'SuperSecretPassword',
    fullname: 'John Doe'
};

const testAccountCopy = {
    ...testAccount
}

testAccountCopy.fullname = 'Alex Smith'

console.log(testAccount)
console.log(testAccountCopy)

// Shallow copy is NOT the best way to copy an object/ array
// does NOT work with nested objects

const student = {
    fullname: 'John Doe',
    grades: {
        mid: 50,
        final: 75
    }
}

const studentCopy = {
    ...student
}

studentCopy.fullname = 'Alex Smith'
studentCopy.grades.final = 100 

console.log(student) // { fullname: 'Alex Smith', grades: { mid: 50, final: 100 } }
console.log(studentCopy) // { fullname: 'Alex Smith', grades: { mid: 50, final: 100 } }


// DEEP COPY USING JSON

const instructor = {
    id: 1,
    students: [
        {
            fullname: 'John Doe',
            grades: {
                final: 100
            }
        },
        {
            fullname: 'Jane Doe',
            grades: {
                final: 100
            }
        }
    ]
};


const instructorCopy = JSON.parse(JSON.stringify(instructor));
instructorCopy.students[1].fullname = 'Alex Smith';

console.log(instructorCopy.students[1].fullname); // updated to Alex Smith
console.log(instructor.students[1].fullname); // original stays the same, Jane Doe