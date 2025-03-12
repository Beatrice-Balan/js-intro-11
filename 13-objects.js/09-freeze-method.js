const book = {
    author: {
        fname: 'Stefan',
        lname: 'Zweig'
    },
    title: 'Amok',
    pages: 62
}

Object.freeze(book); // you make it immutable

book.price = 10.99;
book.pages = 88;
book.author.fname = 'Alex' // this WILL be updated, you should freeze teh author as well

delete book.author;

console.log(book);

console.log(Object.isFrozen(book)); // true

/* freezing only affects the first level of the object. 
If the book object contains nested objects, 
those nested objects can still be modified unless you explicitly freeze them as well.
*/


const locators = {
    mdnLogo: '#mdn-docs-logo'
};
Object.freeze(locators);

locators.mdnLogo = 'Hello';

/* Object.freeze(): 
    Makes the object and all its properties immutable (no additions, deletions, or modifications).

Object.seal(): 
    Prevents additions or deletions, but allows modifying the existing properties


*/