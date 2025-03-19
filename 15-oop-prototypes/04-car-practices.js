const Car = require("./Prototypes/Car");

// create 3 cars

const car1 = new Car('Tesla', 'X', 2023, 80000)
const car2 = new Car('BMW', 'X7', 2022, 60000)
const car3 = new Car('Tesla', 'Y', 2022, 27000)

/*
// log cars
console.log(car1)
console.log(car2)
console.log(car3)

// execute drive stop methods for each car

car1.drive()
car1.brakes()

car2.drive()
car2.brakes()

car3.drive()
car3.brakes()


// price info

console.log(`${car1.year} ${car1.make} ${car1.model} is ${car1.price}`)
console.log(`${car2.year} ${car2.make} ${car2.model} is ${car2.price}`)
console.log(`${car3.year} ${car3.make} ${car3.model} is ${car3.price}`)
*/


// DO IT WITH A LOOP:

// Store cars in an array
const cars = [car1, car2, car3];

// Log cars and execute drive and brake methods
cars.forEach(car => {
    console.log(car);
    car.drive();
    car.brakes();
    console.log(`${car.year} ${car.make} ${car.model} is ${car.price}`);
    console.log() // PROVIDES EMPTY LINE AFTER EACH CAR
});
