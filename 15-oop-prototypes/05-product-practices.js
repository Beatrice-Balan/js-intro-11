const Product = require("./prototypes/Product");

const pen = new Product('Pen', 20, 10);
const tshirt = new Product('T-Shirt', 5, 20);

console.log(pen); // Product { name: 'Pen', quantity: 20, price: 10 }

pen.sell(15);
pen.return(3);
pen.applyDiscount(2) // if discount is more than 1 (100%) it ignores the discount

console.log(pen); // Product { name: 'Pen', quantity: 8, price: 8 }



const mug = new Product('Mug', 10, 15);
mug.sell(200); // Error: We don't have 200 of Mugs in stock!!!

console.log(mug);

/* 2 ways to import
CommonJS (module.exports require) - used with NodeJS

ES6 Modules (import export keywords) 
- are not directly supported with NodeJS but browsers


Cypress and Playwright -> They use both (both are supported)

Some companies have rules of which one to use

Before ES6 (for NodeJS): module.exports = Product;
Afetr ES6 (does NOT work with NodeJS): export Product

To import: 
Before ES6 (but works with NodeJS):
const Product = require("./prototypes/Product");

Afetr ES6 (does NOT work with NodeJS):
import { Product } from "./prototypes/Product"

*/