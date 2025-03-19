const vehicle = {
    move: function () {
        console.log('MOVE')
    }
}

const car = {
    __proto__: vehicle,
    drive: function () {
        console.log('DRIVE')
    }
}

const myCar = {
    __proto__: car,
    electricCharging: true
}

console.log(myCar.electricCharging) // true
myCar.drive() // DRIVE
myCar.move() // MOVE



// Prototype chaining:

console.log(myCar.__proto__); // { drive: [Function: drive] }
console.log(myCar.__proto__.__proto__) // { move: [Function: move] }
console.log(myCar.__proto__.__proto__.__proto__) // [Object: null prototype] {}
console.log(myCar.__proto__.__proto__.__proto__.__proto__) // null

/* If a property or method is not found on an object, JavaScript will look for it in the object’s prototype. 
If it’s not found there, it continues to check the prototype's prototype, and so on, until it reaches null (the end of the chain).
*/

console.log('        ')
console.log(car.__proto__) // { move: [Function: move] }


// example
const date = new Date()
console.log(date.__proto__) // {}