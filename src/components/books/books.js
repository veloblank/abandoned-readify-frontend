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
        <button type='submit' class='delete-book' >
          Delete
        </button>
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
      this.addListeners();
    });
  }

  addListeners() {
    let booksContainer = document.getElementById("books-container");
    let deleteButtons = document.querySelectorAll(".delete-book");
    deleteButtons.forEach(button => {
      button.addEventListener("click", () => {
        return booksContainer.removeChild(button.parentElement);
      });
    });
  }
}

export default Books;
