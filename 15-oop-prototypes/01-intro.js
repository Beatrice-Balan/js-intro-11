/*
OOP = Object Oriented Programming
JS is NOT an oop language
JS is a prototype based programming language

OOP Languages: Java, C#, C++
OOP languages will convert every real life object into programming


JavaScript (JS) is a versatile programming language that supports multiple programming paradigms, 
including Object-Oriented Programming (OOP). OOP is a paradigm that organizes code into objects that have both properties (data) and methods (functions).

In JavaScript, you can implement OOP using objects and classes. 
*/

// constructor function - BEFORE ES6 & NO LONGER USED

function Mug(material, price, designName) {
    this.material = material
    this.price = price
    this.designName = designName
}


const mugJanuary = new Mug('glass', 36.08, 'design1');
const mugFebruary = new Mug('wood', 37.84, 'design2');
const mugMarch = new Mug('plastic', 37.84, 'design3');
const mugApril = new Mug('glass', 100, 'supernicedesign');


console.log(mugJanuary)
console.log(mugFebruary)
console.log(mugMarch)
console.log(mugApril)


// AFTER ES6 - classes

class Student {
    constructor(fullname, age, program) {
        this.fullname = fullname;
        this.age = age;
        this.program = program;
    }
}

const student1 = new Student('John Doe', 25, 'SDET')
const student2 = new Student('Alex Smith', 17, 'SE')

console.log(student1) // Student { fullname: 'John Doe', age: 25, program: 'SDET' }
console.log(student2) // Student { fullname: 'Alex Smith', age: 17, program: 'SE' }
console.log(student1.fullname) // John Doe
console.log(student2.program) // SE
console.log(student2.address) // undefined 