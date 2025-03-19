const Person = require('./Person');


class Programmer extends Person {
    constructor(fullname, age, companyName) {
        super(fullname, age) // this invokes parent class constructor
        this.companyName = companyName;
    }
    code(language) {
        console.log(`Programmer codes in ${language}`)
    }
}

//const programmer = new Programmer('Jane Doe', 20, 'Apple')
//programmer.eat('bread')

module.exports = Programmer

