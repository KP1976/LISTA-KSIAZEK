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

    if(localStorage.getItem('books') !== null) {
      books = JSON.parse(localStorage.getItem('books')); 
    } else {
      books = [];
      vars.bookList.classList.remove('is-visible');
      console.log(vars.bookList);
    }

    books.forEach(book => {
      Books.createBook(book);
    });
  }
}