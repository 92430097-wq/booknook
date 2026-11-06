import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import BookCover from "./BookCover.jsx";

// Reusable card that shows one book
function BookCard({ book }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <div className="card h-100 book-card">
      <Link to={`/books/${book.id}`} className="book-card-media">
        <BookCover book={book} />
        <div className="book-card-overlay">
          <span>
            <i className="bi bi-eye me-1"></i> View details
          </span>
        </div>
      </Link>
      <div className="card-body d-flex flex-column p-3 p-md-4">
        <span className="badge-genre align-self-start mb-2">{book.genre}</span>
        <Link to={`/books/${book.id}`} className="text-decoration-none">
          <h3 className="card-title mb-1">{book.title}</h3>
        </Link>
        <small className="text-muted mb-3">{book.author}</small>
        <div className="mt-auto d-flex align-items-center justify-content-between">
          <span className="price">${book.price.toFixed(2)}</span>
          <button
            className={`btn btn-brand btn-add ${added ? "added" : ""}`}
            onClick={handleAdd}
            aria-label={`Add ${book.title} to cart`}
            title="Add to cart"
          >
            <i className={`bi ${added ? "bi-check-lg" : "bi-bag-plus"}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
