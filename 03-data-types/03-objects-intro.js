// objects use {}

let fName = 'John';
let lName = 'Doe';
let age = 45;
let vip = false;


const person = {
fName: 'John',
lName: 'Doe',
age: 45,
vip: false
}

console.log(person);

console.log(typeof person); // object


console.log(person.fName);

let fname = person.fname;

console.log(typeof person.age); // number

// How to access properties of objects

console.log(person.fName);

console.log(person['fName']); // alternative to person.fName


const program = {
    name: 'SDET',
    start: 'Jan 20, 2025',
    duration: '6 months'
};

console.log(program);

// UPDATING property values within an object. thse 2 methods do the same thing:
program.start = 'Jan 27, 2025';  // preferred
program['duration'] = '7 months'; // one specific case, when you loop through values

console.log(program);


const student = {
    fullname: 'John Doe',
    courses: ['Math', 'Science'], //array so use []
    address: {
        street: '123 abc street',
        number: null,
        city: 'Chicago',
        State: 'IL',
        zip: '60016 1234',
        phonenumber: '312 684 3470'
    }
};

console.log(student);

// adding a property to an existing object. i want to add age
student.age = 25;
student.favoritedish = 'Salmon Salad';

console.log(student);

// Remove properties from an existing object

delete student.address.phonenumber; // this is how you access an object within an object
console.log(student);

console.log(student.courses[1]);

delete student.address;
delete student.age;

console.log(student);

