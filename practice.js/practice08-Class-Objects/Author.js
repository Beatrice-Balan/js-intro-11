// const Book = require('./Book')

/*
1. Create a class called Author
2. Create a constructor which takes firstName, lastName, country, array of books
3. Create a instance method called as getFullName() for Author object that will return {firstName lastName}
4. Create a instance method called as getBooks() for Author object that will return all the books
*/

 // tehse are instance methods
 // if instance method: this.whatever
 // static: no 

class Author {
    constructor(firstName, lastName, country, books) {
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.books = books
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getBooks() {
        return this.books
    }
  }

module.exports = Author