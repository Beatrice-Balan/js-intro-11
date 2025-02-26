let date = '02/23/2025';

// get the date and make sure it's today's date

const dateArr = date.split('/');

//instead of this
//let month = dateArr[0]
//let day = dateArr[1]
//let arr = dateArr[2]

const [month, day, year] = dateArr;


console.log(dateArr); // [ '02', '23', '2025' ]



const currentDate = new Date();


if(month === currentDate.getMonth() + 1 && 
day === currentDate.date.getDate() && 
year === currentDate.getFullYear
) {
    console.log('The day retreived is today')
}
else {
    console.log('There is a prob with the last login date')
}



// otehr example

const credentials = ['techglobal', 'techglobal@gmail.com', 'Test1234']

const [username, email, password] = credentials;

console.log(username) // techglobal
console.log(email) // techglobal@gmail.com
console.log(password) // Test1234

/*
If you want to skip something, add andother comma:
const [username, , password] = credentials;

EXAMPLE:
*/

const favs = ['Shish Kabob', 'Amok', 7, 'Batch-11', true]

const[ , favBook, , favBatch ] = favs;

console.log(favBook) // Amok
console.log(favBatch) // Batch-11









