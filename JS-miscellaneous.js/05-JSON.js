const car ={
    make: 'tesla',
    model: 'Model 3',
    trim: 'sedan',
    color: 'black',
    VIN: '5DVBGF1ULHFTUOS456912'
};

// Serializing JS Object into JSON

const carJSON = JSON.stringify(car);

console.log(car)
console.log(carJSON) // {"make":"tesla","model":"Model 3","trim":"sedan","color":"black","VIN":"5DVBGF1ULHFTUOS456912"}



// Example, student info comes like that from server
const student = '{"ID": 1, "FULL_NAME":"John Doe", "EMAIL":"jdoe@gmail.com"}'

// Task, validate the email is john@gmail.com
// convert (= Deserialize) the JSON string into a JS Object to do all the things

const studentObject = JSON.parse(student);
console.log(studentObject.EMAIL) // jdoe@gmail.com


// Getting info from server using fetch()



const obj = {
    age: undefined, // NOT SUPPORTED BY JSON
    favMovie: null,
    symbol: Symbol(), // NOT SUPPORTED BY JSON
    printHi: function() { // NOT SUPPORTED BY JSON
        console.log('Hi');
    }
};

const objJSON = JSON.stringify(obj)

console.log(objJSON) // {"favMovie":null}