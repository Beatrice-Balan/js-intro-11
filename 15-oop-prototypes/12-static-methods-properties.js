class Program {
    // instance properties (instance variables = properties = fields = states)
    name = 'SDET';
    batchNo = 11;


    // instance methods
    funcA() {
        console.log('A')
    }
    static funcB() {
        console.log('B')
    }
}

Program.funcB() // B

const p1 = new Program()
p1.funcA(); // "TypeError: Program.funcA is not a function" you cannot access instance methods and properties with the class name


Math.PI// static
Number.MAX_SAFE_INTEGER // static
Math.max(2, 3) // static




// STATIC


class Program {
    // static properties 
    static name = 'SDET';
    static batchNo = 11;


    // instance methods
    funcA() {
        console.log('A')
    }
    static funcB() {
        console.log('B')
    }
}

console.log(Program.name) // SDET
console.log(Program.batchNo) // 11

/* INSTANCE = create an object (instance) from the class.
The object (instance) holds its own properties and can invoke instance methods that use or modify those properties.

Create an object first, then use the instance (OBJECT) to invoke the method.

STATIC = You invoke static methods directly on the class itself, without creating an instance.
Static methods don’t operate on instance properties, so you don’t need to create an object to use them.

Static Methods: Invoke the method directly on the class, no need to create an object.
*/