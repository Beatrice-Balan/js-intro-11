/* In JavaScript, private properties are used to encapsulate data within a class so they cannot be directly 
accessed or modified from outside the class.

Private properties are prefixed with a # symbol. 
This makes them accessible only within the class where they are defined.

Key Points:
Encapsulation: Private properties help restrict access to sensitive data.
Direct Access: Attempting to access a private property directly from outside the class will result in an error.

Methods: Use public methods to interact with private properties.

Private properties are supported in modern JavaScript (ES2022 and later).
*/

class Customer {
    // private peroperty
    #secretInformation = 'Hello';

    //public property
    notSecret = 'Hi'

    // public property - all the instances can access this
    constructor(fullname, address) {
        this.fullname = fullname;
        this.address = address;
    }
}

const cust1 = new Customer();

const cust2 = new Customer();

console.log(cust1.secretInformation)
console.log(cust2.secretInformation)



