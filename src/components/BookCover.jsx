// A simple book cover made with CSS (no image needed)
function BookCover({ book, big }) {
  return (
    <div
      className={`book-cover ${big ? "big" : ""}`}
      style={{ backgroundColor: book.color }}
    >
      <div className="book-cover-title">{book.title}</div>
      <div className="book-cover-line"></div>
      <div className="book-cover-author">{book.author}</div>
    </div>
  );
}

export default BookCover;
