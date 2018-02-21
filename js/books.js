const Books = (_=> {
  vars = {};

  function addBook() {
    const bookValues = {
      bookTitle: vars.bookTitle.value,
      bookAuthor: vars.bookAuthor.value,
      bookPrice: parseFloat(vars.bookPrice.value).toFixed(2)
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

    vars.bookTitle.value = '';
    vars.bookAuthor.value = '';
    vars.bookPrice.value = '';
  }

  function createBook(bookValues) {
    const html = `
      <div class="book-list-row">
        <p class="book-list-title">${bookValues.bookTitle}</p>
        <p class="book-list-author">${bookValues.bookAuthor}</p>
        <p class="book-list-price">${bookValues.bookPrice}</p>
        <button class="book-list-delete">X</button>
      </div>
      <hr class="horizontal-line">
    `;

    vars.bookList.insertAdjacentHTML('beforeend', html);
  }

  function init(_vars) {
    vars= _vars;

    vars.addBookBtn.addEventListener('click', addBook);
  }

  return { init };
})();