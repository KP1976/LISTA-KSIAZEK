document.addEventListener('DOMContentLoaded', _=> {
  Books.init({
    bookTitle: document.querySelector('.book-title'),
    bookAuthor: document.querySelector('.book-author'),
    bookPrice: document.querySelector('.book-price'),
    box: document.querySelector('.box'),
    warning: document.querySelector('.warning'),
    addBookBtn: document.querySelector('.addbook-btn'),
    bookList: document.querySelector('.book-list'),
    bookRow: document.querySelector('.book-list-row') 
  });
});