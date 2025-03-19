// parent class can have multiple child classes (like Person had singer, dancer, programmer etc)
// child class can only have ONE parent class - child class can only inherit from one parent class

// Classes can ONLY extend a single class

/* A class can only have one constructor method, and attempting to define 
more than one will result in a syntax error.

you don't need to explicitly call super() because none of your child classes 
(Cat, Dog, or GermanShepard) define a constructor. When a child class 
doesn't have its own constructor, JavaScript automatically creates a default one

This default constructor will call the parent class's constructor, ensuring that 
any necessary initialization from the parent class happens. 
Since the Animal class doesn’t define a constructor, its default constructor (which is empty) 
is inherited by the subclasses.

This chain allows subclasses like Cat, Dog, and GermanShepard to inherit from Animal 
seamlessly without needing an explicit super() call unless you override the constructor.

If you do add a constructor in the subclass, you must explicitly call super() if the 
subclass extends another class

Example: Dog cannot access the task method because task is defined in the GermanShepard class, 
which is a subclass of Dog. 
In JavaScript, inheritance works from the parent class to the child class, 
not the other way around.

Each subclass inherits methods from its ancestors but does not share its own methods upwards in the hierarchy.
*/


class Animal {
    // constructor() {} -> if you don't have a constructor added in your template, JS will have a default one from JS, empty
    eat() {
        console.log('EAT');
    }
    sleep() {
        console.log('SLEEP');
    }
}

class Cat extends Animal {
    play() {
        console.log('PLAY');
    }
}

class Dog extends Animal {
    protect() {
        console.log('PROTECT');
    }
}

class GermanShepard extends Dog {
    task() {
        console.log('TASK');
    }
}

const dog1 = new Animal();
dog1.eat();
dog1.sleep();

const dog2 = new Dog();
dog2.eat();
dog2.sleep();
dog2.protect();

const dog3 = new GermanShepard();
dog3.eat();
dog3.sleep();
dog3.protect();
dog3.task();

// proto

console.log(dog3.__proto__) // Dog {}
console.log(dog3.__proto__.__proto__) // Animal {}
console.log(dog3.__proto__.__proto__.__proto__) // {}
console.log(dog3.__proto__.__proto__.__proto__.__proto__) // [Object: null prototype] {}
