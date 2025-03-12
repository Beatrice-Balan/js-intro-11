const cities = [ 'Rome', 'Berlin', 'Kyiv' ];

const capItaly_ = cities[0];
const capGermany_ = cities[1];
const capUkraine_ = cities[2];

// instead of all the lines, destructure:

const [ capItaly, capGermany, capUkraine] = cities;

console.log(capItaly)

const account = {
    accHolder: 'John Doe',
    email: 'johndoe@gmail.com',
    pass: 'john123',
    username: 'johnwashere',
    DOB: '01/01/2000',
    accNumber: '1234-1234-1234-1234',
    securityCode: 123
};

// destructure ->
const { username, password, email, DOB: dateOfBirth } = account;
// now you can use all of those as regular variable names:

console.log(username);
console.log(password);
console.log(email);
console.log(DOB);

// if you try to access a prop that doesn't exist -> undefined :)