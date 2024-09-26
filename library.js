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

    borrowBook(isbn) {
        const bookIndex = this.books.findIndex(book => book.isbn === isbn);
        if (bookIndex !== -1) {
          this.books.splice(bookIndex, 1); // Remove the book
        } 
        else {
          throw new Error('Book not available');
        }
    }
  }
  
module.exports = Library;