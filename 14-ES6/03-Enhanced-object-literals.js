/* Enhanced Object Literals in JavaScript are a set of shorthand syntax features 
introduced in ES6 to make object creation more concise and readable. 

These features simplify how you define objects and their properties.

Key Features of Enhanced Object Literals:
1. Shorthand Property Names
If the property name matches the variable name, you can omit the value.

2. Method Shorthand
You can define methods in objects more concisely by omitting the function keyword.

3. Computed Property Names
You can use an expression inside square brackets to define dynamic property names.

4. Concise Getter and Setter Syntax
You can define getter and setter methods more easily using shorthand syntax.

5. Super (In Constructor Functions and Class Methods)
In a class, you can use super in methods and constructors to call functions from the parent class.
*/


let fullname = 'John Doe'
let age = 25
let address = {
    street: '123 abc street',
    city: 'chicago',
    state: 'IL',
    zip: 12345
}

// Make JS object out of above variables

const customerObj = {
    fullname,
    age,
    address
}

res.send(JSON.stringify(customerObj)) // syntax to send to server