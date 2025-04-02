console.log('Hello from script-1')

// Client vs Server environment

console.log("Window:::", window) /// only available on client side
// console.log("GLOBAL", global) // Available only on server side, will throw error on browser global is not defined

if(typeof window !== undefined) {
    // some client code
}

/* ALERT
alert() does not return anything
*/

//const alertAns = window.alert('Alert!!!')
//console.log('AlertAns', alertAns) // undefined - ReferenceError: window is not defined


// PROMPT
/* provide message and click ok and receive a string value (whatever message typed)
- if you type something and cancel - it will return null
- no message and click OK - empty string
- no message and click Cancel - null

const promptAns = prompt('Would you like to hear from us? Leave your email')
console.log(promptAns)
*/


/* CONFIRM
- returns boolean
if you click Cancel - false 
if you click OK - true 

const confirmAns = confirm('Are you a student?')
console.log(confirmAns)
*/

/** localStorage()
 * window.localStorage()
 *  is a web API that allows you to store key-value pairs in the browser with no expiration. 
 * Data persists even after the page is reloaded or the browser is closed
 */

/*

// Storage length -> how many items
const storageLen = localStorage.length
console.log(storageLen)

// setItem
localStorage.setItem('username', 'abc123')
console.log(storageLen)

// getitem
const userName = localStorage.getItem('username')
console.log("username:", userName) // in browser: username: abc123

// remove the item

localStorage.removeItem('username')
console.log('username:', userName)

// clear
localStorage.clear()

// How to store objects in storage?

localStorage.setItem('userInfo', {name: 'Alex', email: 'alex@gmail.com'})
localStorage.setItem('userInfo', JSON.stringify({name: 'Alex', email: 'alex@gmail.com'}))

const userInfo = localStorage = localStorage.getItem('userInfo') // string
const userInfoObj = localStorage = JSON.parse(localStorage.getItem('userInfo')) // string
console.log('user info:', userInfo)
console.log('user info obj:', userInfoObj)

*/

/*
Ask for the user's name:
Use prompt() to collect the user's name.
If the user provides a name, display a welcome message using alert().
If no name is entered, display an error message in the console and exit.

Ask if they want to continue:
Use confirm() to ask if they want to proceed.
If they confirm, show an alert saying they chose to continue.
If they cancel, show an alert saying they canceled the action.

Log screen details in the console:
Log innerWidth (browser window width).
Log innerHeight (browser window height).

Reload the page after 10 seconds:
Display a message in the console informing the user that the page will reload.
Use setTimeout() with window.location.reload() to refresh the page after 10 seconds.
*/

let userName = prompt("Enter your name here:")
console.log(`User Name: ${userName}`)

if (!userName) {
    alert(`Error, name not entered.`)
    throw new Error('You did not enter a username')
} 

let proceed = confirm("Do you want to proceed?")
if (proceed) {
    alert("You chose to continue.")
} 
else {
    alert("You canceled the action.")
}

console.log(`innerWidth: ${window.innerWidth}`)
console.log(`innerHeight: ${window.innerHeight}`)

console.log("The page will reload in 10 seconds...")

setTimeout(() => {
    window.location.reload()
}, 10000)