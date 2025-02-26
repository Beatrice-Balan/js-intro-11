/*
console.log('Hello')
console.log('John')
console.log('Monday')


JS does not wait for delays, exectues the stuff that go fast, if there's a delay with some code,
it will move on to the next one and then go back to the delayed one whenever it's ready
*/

// cAll stack - WEB APIs - Callback Queue
 function connectToDB() {
    console.log('Connected to database...')
 }

 function getData() {
    console.log('Data...')
 }


 function processData() {
    console.log('Data Processed...')
 }

 function runDB() {
    connectToDB();
    getData();
    processData();
 }

 runDB();