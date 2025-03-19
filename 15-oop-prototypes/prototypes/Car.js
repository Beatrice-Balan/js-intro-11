// Create a Car class
// And a Constructor which takes parameters: make, model, year, price
// Add 2 methods void and instance: drive, brakes
// {make} {model} drives
// {make} {model} breaks

class Car {
    constructor(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log(`${this.make} ${this.model} drives!`);
    }
    brakes() {
        console.log(`${this.make} ${this.model} brakes!`);
    }
}

// how to export

module.exports = Car;





