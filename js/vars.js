document.addEventListener('DOMContentLoaded', function() {
  Books.init({
    bookTitle: this.querySelector('.book-title'),
    bookAuthor: this.querySelector('.book-author'),
    bookPrice: this.querySelector('.book-price'),
    box: this.querySelector('.box'),
    warning: this.querySelector('.warning'),
    addBookBtn: this.querySelector('.addbook-btn'),
    bookList: this.querySelector('.book-list'),
    bookRow: this.querySelector('.book-list-row')
  });
});