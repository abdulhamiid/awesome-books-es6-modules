import { BookCollection } from './saveBooksData.js';

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const booksStore = [];

const Book1 = new BookCollection(bookTitle, bookAuthor, booksStore);

// instatiate
export const createBook = () => {
  Book1.saveData();
  Book1.removeData();
  Book1.existingData();
};
