class Citizen {
    country = 'US';
    batch = 11;

    // private properties
    #SSN;
    #secret = 'secret info'

    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }

// getters and setters for private fields which provides indirect access

    getSSN(adminPassword) {
        if(adminPassword === 'SecretPassword') return this.#SSN;
        throw new Error('You are not authorized!')
    }

    setSSN(ssn) {
        if(ssn.length === 9) return this.#SSN = ssn
       else throw new Error('The SSN is not correct')
    }
}

const c1 = new Citizen('John Doe', 25)
const c2 = new Citizen('Jane Doe', 25)

console.log(c1)

c1.setSSN('123456789')

console.log(c1.getSSN('SecretPassword'))

