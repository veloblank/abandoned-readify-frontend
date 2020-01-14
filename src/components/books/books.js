import Book from "./book.js";

class Books {
  constructor(books) {
    this.books = [];
    this.createBooks(books);
  }

  createBooks(arrBooks) {
    console.log(arrBooks);
    for (let book of arrBooks) {
      this.books.push(new Book(book));
    }
    this.renderBooks();
  }

  renderBooks() {
    let booksContainer = document.getElementById("books-container");
    while (booksContainer.firstChild) {
      booksContainer.removeChild(booksContainer.firstChild);
    }
    this.books.forEach(book => {
      let bookCard = `
        <div class='book-card'>
          <div class='book-cover'>
            <img src='${book.img_src}'/>
          </div>
          <div class='book-info'>
            <div class='book-title'>${book.title}</div>
            <h4>${book.words} words</h4>
            <p>${book.author}</p>
            <p>Audiobook: ${book.string_reading_length}</p>
          </div>
        </div>
      `;
      booksContainer.innerHTML += bookCard;
    });
  }
}

export default Books;
