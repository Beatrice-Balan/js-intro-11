/* ACCESSING DOM ELEMENTS
 - below methods are functions of the document
*/

console.log(document)

//getElementById()
const headingEl = document.getElementById('heading')
console.log(headingEl)

// getElementsByClassName()

const dogImages = document.getElementsByClassName('dog')
console.log(dogImages) // returns HTML Collection (similar to JS array)

console.log(dogImages[0]) // you can access them using indexes
// you can loop through them


// getElementsByTagName()

const dogImagesTag = document.getElementsByTagName('img')
console.log(dogImagesTag) // returns HTML collection

// querySelector() -> returns a single element
// - this is a universal "get" method

const headingElement = document.querySelector('#heading')
const firstDogElement = document.querySelector('.dog')
const firstDogElement2 = document.querySelector('.img')
console.log('heading', headingElement)
console.log('dog el', firstDogElement)
console.log('dog el 2', firstDogElement2)

/* querySelector() - returns NodeList, similar to array
- gets ALL the elements with that id, or in that class
*/

const dogImagesQuery = document.querySelectorAll('img')
const dogImagesQuery2 = document.querySelectorAll('.dog')

console.log('dogImagesQuery', dogImagesQuery)
console.log('dogImagesQuery2', dogImagesQuery2)

console.log(dogImagesQuery[0])
console.log(dogImagesQuery.item(0))

// can also use loops

for (let i = 0; i < dogImagesQuery.length; i++) {
    console.log(dogImagesQuery[i])
}


/* innerHTML
- is a JavaScript property that allows you to get or set the HTML content inside an element.
*/

let author = 'Joe Doe';
const authorEl = document.getElementById('author'); // grab element
authorEl.innerHTML = author; // set content of element using innerHTML


// Add html to element using innerHTML
authorEl.innerHTML = `<h1>Jane Doe</h1>` // this will replace the previous author, or whatever info

// if you want to append instead of replace?
authorEl.innerHTML += `<h1>Alex Doe</h1>`


// Create an array of something
const students = ['student1', 'student2']
// Inside the htm you will have a table element
// Dynamically append new row with array data

table.innerHTML = '<tr><td>${StudentName}</td></tr>'