const person = {
    fname: 'John',
    lname: 'Doe',
    age: 27
};

// John doe will be 30 after 5 years. And then you can update, it's dynamic

let years = 7;
console.log(person.fname + ' ' + person.lname + ' will be ' + (person.age + years) + ' after ' + years + ' years.');
// above is complicated concatenation - NO LONGER USED

// TEMPLATE LITERALS. Backtick are awsome

console.log(`${person.fname} ${person.lname} will be ${person.age + years} after ${years} years.`)


let price = 2.5;
let quantity = 10;

// The total price is = $25

console.log(`The total price is = $${price * quantity}`);