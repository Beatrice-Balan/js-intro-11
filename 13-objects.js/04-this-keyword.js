// FIX this code

const dog = {
    name: 'Hunter',
    age: 4,
    getInfo: function() {
        return this.name + ' ' + this.age;
    };

    const math: {
        sum: function(num1, num2) {
            return num1 + num2
        }
    }

};

console.log(dog) // { name: 'Hunter', age: 4, getInfo: [Function: getInfo] }
console.log(dog.getInfo()) // Hunter