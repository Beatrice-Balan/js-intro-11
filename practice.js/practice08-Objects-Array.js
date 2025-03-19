/* TASK-3
You are given a JS Array below:
•	Find the cheapest book in the bookstore  	       	-> To Kill a Mockingbird
•	Find the most expensive book in the bookstore  	-> Harry Potter and the Sorcerer's Stone
•	Find all Classic books   			    	-> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]
*/
const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];

// Find the cheapest book in the bookstore 	-> To Kill a Mockingbird

let cheapestBook = bookstore.reduce((cheapest, currentBook) => {
    return currentBook.price < cheapest.price ? currentBook : cheapest
})

console.log(cheapestBook.title)


// Find the most expensive book in the bookstore  	-> Harry Potter and the Sorcerer's Stone

let expensiveBook = bookstore.reduce((expensive, currentBook) => {
    return currentBook.price > expensive.price ? currentBook : expensive
})

console.log(expensiveBook.title)


// Find all Classic books      	-> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]

let classicBooks = []

bookstore.filter((book) => {
    if(book.genre === 'Classic') {
        classicBooks.push(book.title)
    }
})

console.log(classicBooks)