/* Object.create() static method creates a new object
    - using an existing object as the prototype of the newly created object.
*/

const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25
};

// one way to copy the person1 info into person 2
const person2 = {
    ...person,
    isLive: true
};

// other option
const person3 = Object.create(person)

console.log(person)
console.log(person2)
console.log(person3) // {}
console.log(person3.age) // 25

/* person3 is displayed as an empty object ({}) is due to how Object.create() works. 
It creates a new object with the prototype set to the object you pass in, 
but it does not copy the properties of the original object to the new one. 

Instead, the new object inherits those properties from its prototype.
*/

// if you add something to the child (person3), is parent (person) updated? NO


