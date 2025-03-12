// key is always string, but value can be any data type:
    // null, undefined, string, number, bigint, symbol, boolean, array, object, function

    const person = {
        fname: 'John',
        mname: null,
        lname: 'Doe',
        age: 25,
        married: undefined,
        isMember: true,
        favMovies: ['The Batman', 'Red'],
        address: {
            street1: '123 Abc Street',
            street2: 'Ste 310',
            city: 'des Plaines',
            state: 'IL',
            zip: 60016
        }
    };

// JSON does NOT support: undefined, symbol(), function
// if you stringfy this person, you have to be careful

const cat = {
    name: 'Ra',
    age: 1,
    sound: function() {
        console.log('MEOW!')
    },
    getMood: function() {
        return 'HANGRY';
    },
    getInfo: function() {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
};

console.log(cat.name); // Ra
cat.sound(); // MEOW!
console.log(cat.getMood()); // HANGRY
cat.getInfo(); // name: Ra, age: 1

/* "this" keyword
when you want to call some property within the object, for ex:
${this.name}, age: ${this.age}

*this* is a reference to the current object. Who is invoking this method? Cat

*/