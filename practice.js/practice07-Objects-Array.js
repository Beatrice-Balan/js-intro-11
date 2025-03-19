/*TASK-2
You are given a JS Array below:
•	Find the most expensive product   			-> MacBook Pro 16-inch
•	Find the least expensive product   			-> AirPods Pro
•	Find the product with the biggest quantity   		-> AirPods Pro
•	Find the product with the smallest quantity  	-> MacBook Pro 16-inch
•	Find all the product names   			-> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
*/

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

// Find the most expensive product -> MacBook Pro 16-inch
const expensiveProduct = appleStore.reduce((mostExpensive, curr) => curr.price > mostExpensive.price ? curr : mostExpensive)

console.log(expensiveProduct.productName) 



// Find the least expensive product  -> AirPods Pro

const cheapestProduct = appleStore.reduce((cheapest, curr) => curr.price < cheapest.price ? curr : cheapest)

console.log(cheapestProduct.productName) 


// Find the product with the biggest quantity -> AirPods Pro

const bigQuant = appleStore.reduce((acc, curr) => curr.quantity > acc.quantity ? curr : acc)

console.log(bigQuant.productName) 


// Find the product with the smallest quantity  -> MacBook Pro 16-inch

const smallQuant = appleStore.reduce((acc, curr) => curr.quantity < acc.quantity ? curr : acc)

console.log(smallQuant.productName) 


// Find all the product names

const productNames = appleStore.map((product) => product.productName)

console.log(productNames)


