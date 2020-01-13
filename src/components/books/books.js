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
      let bookCard = `<img src='${book.img_src}'/>`;
      booksContainer.innerHTML += bookCard;
    });
  }
}

export default Books;
