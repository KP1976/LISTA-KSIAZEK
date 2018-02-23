class LS {
  saveBookInLocalStorage(bookValues) {
    let books;

    if(localStorage.getItem('books') !== null) {
      books = JSON.parse(localStorage.getItem('books'));
    } else {
      books = [];
    }
  
    books.push(bookValues);
    localStorage.setItem('books', JSON.stringify(books)); 
  }

  showBooksFromLocalSotrage() {
    let books;

    if(localStorage.getItem('books') !== null && JSON.parse(localStorage.getItem('books')).length !== 0) {
      books = JSON.parse(localStorage.getItem('books')); 
      vars.bookList.classList.add('is-visible');
    } else {
      books = [];
      vars.bookList.classList.remove('is-visible');
    }

    books.forEach(book => {
      Books.createBook(book);
    });

  }

  removeFromLocalStorage(author) {
    let books;

    if(localStorage.getItem('books') !== null) {
      books = JSON.parse(localStorage.getItem('books'));
    } else {
      books = [];
      vars.bookList.classList.remove('is-visible');
    }

    books.forEach((book, index) => {
      if(book.bookAuthor === author) {
        books.splice(index, 1);
        console.log(book.bookAuthor, author);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}