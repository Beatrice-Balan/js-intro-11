const response = '[{"INSTRUCTOR_ID":1,"FULLNAME":"Leyla Haddad","STUDENTS":[{"STUDENT_ID":1,"DOB":"2020-09-20T00:00:00.000Z","EMAIL":"tech.global@techglobal.com","FIRST_NAME":"Tech","LAST_NAME":"Global","INSTRUCTOR_ID":1}]},{"INSTRUCTOR_ID":2,"FULLNAME":"Robert Hass","STUDENTS":[{"STUDENT_ID":2,"DOB":"1990-01-01T00:00:00.000Z","EMAIL":"john.doe@techglobal.com","FIRST_NAME":"John","LAST_NAME":"Doe","INSTRUCTOR_ID":2}]},{"INSTRUCTOR_ID":3,"FULLNAME":"Sofia Alvarado","STUDENTS":[]},{"INSTRUCTOR_ID":4,"FULLNAME":"Tony Hunter","STUDENTS":[]}]'

const jsObject = JSON.parse(response);

// console.log(jsObject)
console.log(jsObject[1].STUDENTS[0].EMAIL)

// JSON = JavaScript Object Notation


// How to creat an object

// no one uses this way:
const obj1 = new Object(); // empty object

obj2 = {}; // empty object


const mouse = {
    name: 'HP Smart',
    price: 10.99,
    quantity: 15,
    delivery: ['pick up', 'devivery'] 
};


// add more propreties with dot notation or bracket notation
// most times we use dot notation

mouse.colors = ['White', 'Black', 'Blue', 'Pink']

// mouse['colors'] = ['White', 'Black', 'Blue', 'Pink'] => not reall used


// remove propreties

delete mouse.delivery;
// delete mouse['delivery'] // bracket nottation


console.log(mouse)

// retrieve proprety values with dot or bracket nottation

console.log(mouse.price)
//                                                console.log(mouse['price'])