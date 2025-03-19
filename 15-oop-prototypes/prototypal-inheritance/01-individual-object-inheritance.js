// BEFORE ES6

const baseTable = {
    name: 'Table',
    adjustable: true,
    method() {
        console.log('This is a function!')
    }
};

const diningTable = {
    __proto__: baseTable, // inheriting properties of baseTable object
    purpose: 'Dining',
    material: 'Wood'
};

const officeTable = {
    purpose: 'Work-Office',
    material: 'Wood',
    __proto__: baseTable
}


console.log(diningTable.name) // Table
console.log(diningTable.adjustable) // true
diningTable.method() // This is a function!

console.log(officeTable.__proto__) // { name: 'Table', adjustable: true, method: [Function: method] }


// Another way to injerit a single object's methods and properties to another objects - using Object.create() method

const tool = {
    variable: 'some info',
    fix: function () {
        console.log('FIX');
    }
};

const hammer = Object.create(tool); // inherits all methods and prop from 'tool'
hammer.brand = 'any brand';
hammer.break = function () {
    console.log('BREAK');
}

hammer.fix(); // FIX
hammer.break();
console.log(hammer.variable); // some info
console.log(hammer.brand); // any brand

// tool.break() // TypeError: tool.break is not a function
// parent cannot access child's methods or properties

console.log(hammer.__proto__) // it shows you tool: { variable: 'some info', fix: [Function: fix] }











