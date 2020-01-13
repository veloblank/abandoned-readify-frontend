class Book {
  constructor(obj) {
    this.title = obj.title;
    this.author = obj.author;
    this.img_src = obj.img_src;
    this.string_reading_length = obj.length_text_string;
    this.reading_length = obj.length_text_mins;
    this.id = obj.search_id;
  }
}

export default Book;
