const Library = require('./library');
const Book = require('./book');

test('should add a book to the library', () => {
  const library = new Library();
  const book = new Book('1234', 'The Clean Coder', 'Robert C. Martin', 2011);
  library.addBook(book);

  expect(library.getAvailableBooks()).toContain(book);
});
