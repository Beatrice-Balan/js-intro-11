import { Customer } from "./Customer.js";

/* TASK-PART-3
Create a class called BusinessCustomer and inherit the Customer class
- Create a constructor for this class which takes 5 arguments: 
    name
    age
    membershipType
    membershipCost
    duration
    - Inherit the Customer class constructor and the other methods

- Create a method called extendContract() which extends the business customer's contract by 1 year and 
decreases the cost by %15.
*/

export class BusinessCustomer extends Customer{
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost)
        this.duration = duration
    }

    extendContract() {
        this.duration = this.duration + 1
        this.membershipCost = this.membershipCost - (this.membershipCost * 0.15)
    }
}

