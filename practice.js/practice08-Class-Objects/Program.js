/*
We will write our actual program that we define an author and the books
In this program we will write the biography of George R. R. Martin, an American novelist.

Create 3 books object with the below information:
        BookName                            Genre           TotalPage
        A Game of Thrones                   Epic Fantasy    694
        A Clash of Kings                    Epic Fantasy    768
        A Storm of Swords                   Epic Fantasy    973

Create an Author object with the below information:
    First name: George R. R.
    Last name: Martin
    Country: United States
    Books: are given above

1. Get and print Author's full name
2. Get and print Author's books iterated with a loop

EXPECTED OUTPUT:
George R. R. Martin
Book { title: 'A Game of Thrones', genre: 'Epic Fantasy', page: 694 }
Book { title: 'A Clash of Kings', genre: 'Epic Fantasy', page: 768 }
Book { title: 'A Storm of Swords', genre: 'Epic Fantasy', page: 973 }
*/

const Book = require('./Book');
const Author = require('./Author');

// create books
const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694)
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 786)
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973)

// create Author

const books = [ book1, book2, book3 ]
const author1 = new Author('George R. R.', 'Martin', 'United States', books)

// get full name
console.log(author1.getFullName())

// loop books

/*for of:
for(const book of author1.getBooks() {
console.log(book)
}

*/

author1.getBooks().forEach(book => console.log(book))

/*
for(let i = 0; i < books.length; i++) {
    let book = books[i]
    //console.log(`Book title: ${book.title}, genre: ${book.genre}, page: ${book.page}`)
}
*/

// print book with more pages

// performance-wise NOT the best option
let sortedBooks = author1.getBooks().sort((a, b) => b.page - a.page)
console.log(sortedBooks[0].title)

// loop - good not the best
let maxPagesBook = author1.getBooks()[0];
for (const book of author1.getBooks()) {
    if (book.page > maxPagesBook.page) {
        maxPagesBook = book;
    }
}
console.log(`The book with the most pages is: ${maxPagesBook.title}`)


// reduce - best
let bookWithMostPages = author1.getBooks().reduce((acc, curr) => curr.page > acc.page ? curr : acc)
console.log(bookWithMostPages.title)

  /* long reduce
  let bookWithMostPages = author1.getBooks().reduce((acc, curr) => {
    if(curr.page > acc.page) return curr
    else return acc
  })
  */
  
