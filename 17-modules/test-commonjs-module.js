// import the reusable code

// Import Statements:
// common JS

// importing UIHelper object
const UIHelper = require('./UIHelper.js')

console.log(UIHelper.component)
console.log(UIHelper.getURL())

// you are importing UIHelper as a property
const { UIHelper } = require('./UIHelper.js')

console.log(UIHelper.component)
console.log(UIHelper.getURL())

console.log(hello())



const { getRandomNumber } = require('../utils/MathHelper.js')

console.log(getRandomNumber(1, 10))


const DBHelper = require('./DBHelper.js')


const{ post, del } = require('./APIHelper.js')

