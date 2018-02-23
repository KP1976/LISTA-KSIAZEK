const Books = (_=> {
  const ls = new LS();

  // Funkcja dodawania książki
  function addBook() {
    const bookValues = {
      bookTitle: vars.bookTitle.value,
      bookAuthor: vars.bookAuthor.value,
      bookPrice: vars.bookPrice.value
    };
    const regExp = /^\d+(\.\d+)?$/;

    if(!regExp.test(bookValues.bookPrice)) {
      vars.warning.classList.add('is-visible');
      setTimeout(_=> vars.warning.classList.remove('is-visible'), 2000);
      return;
    } else {
      vars.bookList.classList.add('is-visible');
      createBook(bookValues);
    }

    ls.saveBookInLocalStorage(bookValues);

    vars.bookTitle.value = '';
    vars.bookAuthor.value = '';
    vars.bookPrice.value = '';
  }

  // Funkcja tworzy i wyświetla listę książek
  function createBook(bookValues) {
    const html = `
      <div class="book-list-row">
        <p class="book-list-title">${bookValues.bookTitle}</p>
        <p class="book-list-author">${bookValues.bookAuthor}</p>
        <p class="book-list-price">${parseFloat(bookValues.bookPrice).toFixed(2)}</p>
        <button class="book-list-delete">X</button>
      </div>
      <hr class="horizontal-line">
    `;

    vars.bookList.insertAdjacentHTML('beforeend', html);
  }

  // Funkcja kasowania książki
  function delBook(e) {
    if(e.target.classList.contains('book-list-delete')) { 
      e.target.parentNode.nextElementSibling.remove();
      e.target.parentNode.remove();
    }

    ls.removeFromLocalStorage(e.target.previousElementSibling.previousElementSibling.textContent);

    // Jeżeli ostatnia książka zostanie usunięta, to znika cała lista
    const rows = document.querySelectorAll('.book-list-row');
    if(rows.length === 0) { 
      this.classList.remove('is-visible');
    }

  }

  function init(_vars) {
    vars = _vars;

    ls.showBooksFromLocalSotrage();
    vars.addBookBtn.addEventListener('click', addBook);
    vars.bookList.addEventListener('click', delBook);
  }

  return { 
    init, 
    createBook 
  };
})();