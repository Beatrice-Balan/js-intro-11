function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.eat = function () {
    console.log('EAT')
}

Animal.prototype.sleep = function () {
    console.log('SLEEP')
}

function Dog(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
}

// inherit Animal prototype:
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function () {
    console.log('BARK')
}

const dog1 = new Dog('Hunter', 4, 'Brittany Spaniel')
dog1.bark() // BARK
dog1.eat() // EAT

console.log(dog1.name) // Hunter
console.log(dog1.age) // 4
console.log(dog1.breed) // Brittany Spaniel

