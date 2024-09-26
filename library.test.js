const Library = require('./library');
const Book = require('./book');

test('should add a book to the library', () => {
  const library = new Library();
  const book = new Book('1234', 'The Clean Coder', 'Robert C. Martin', 2011);
  library.addBook(book);

  expect(library.getAvailableBooks()).toContain(book);
});

test('should borrow a book from the library', () => {
    const library = new Library();
    const book = new Book('1234', 'The Clean Coder', 'Robert C. Martin', 2011);
    library.addBook(book);
  
    library.borrowBook('1234');
    expect(library.getAvailableBooks()).not.toContain(book);
});
  
test('should raise an error when borrowing an unavailable book', () => {
    const library = new Library();
  
    expect(() => library.borrowBook('999')).toThrow('Book not available');
});
  
