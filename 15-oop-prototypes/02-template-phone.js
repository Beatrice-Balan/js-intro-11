// BEFORE ES6

// Phone constructor for creating prototype
/*
function Phone(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.proce = price;
}

// Add prototype methods
Phone.prototype.call = function () {
     console.log(`${this.brand} is calling!`)
}

Phone.prototype.text = function () {
    return `${this.brand} text!`
}

const phone1 = new Phone('iPhone', 'Purple', 1000);
const phone2 = new Phone('Samsung', 'Blue', 1200);
const phone3 = new Phone('Nokia', 'Black', 750);

phone1.connectCarPlay = () => {
    console.log('Connection completed!')
}

phone3.call();
console.log(phone2.text())

phone1.connectCarPlay() // works because you added it to phone1
// phone2.connectCarPlay() // you added this only to phone1, so TypeError: phone2.connectCarPlay is not a function

*/
// AFTER ES6
// create a class

class Phone {
// create constructor which takes properties and assigns them to 'this' keyword
    constructor(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.proce = price;
    }
// Add instance methods here, in this part of the block

// can add void instance/ object methods
    call() {
        console.log(`${this.brand} is calling!`)
    }
// can add return instance/ object methods
    text() {
        return `${this.brand} text!`
    }
// create a static method that can be invoked with template name: Phone.anyFunction()
    static anyFunction() {
        console.log('This is a static method!')
    }

}

// These are instances or object of the Phone template
const phone1 = new Phone('iPhone', 'Purple', 1000);
const phone2 = new Phone('Samsung', 'Blue', 1200);
const phone3 = new Phone('Nokia', 'Black', 750);

phone1.call(); // iPhone is calling!
phone2.call(); // Samsung is calling!
phone3.call(); // Nokia is calling!


// create a static method for Phone

Phone.anyFunction() // This is a static method!














