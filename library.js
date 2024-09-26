class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    getAvailableBooks() {
      return this.books;
    }
  }
  
module.exports = Library;