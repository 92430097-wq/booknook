import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import books from "../data/books.js";
import { useCart } from "../context/CartContext.jsx";
import BookCover from "../components/BookCover.jsx";
import BookCard from "../components/BookCard.jsx";

// Dynamic page: the book id comes from the URL (/books/:id)
function BookDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="container py-5">
        <div className="surface empty-state">
          <div className="icon-circle mb-3">
            <i className="bi bi-journal-x"></i>
          </div>
          <h2>Book not found</h2>
          <p className="text-muted">The book you are looking for does not exist.</p>
          <Link to="/books" className="btn btn-brand mt-2">
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  // other books from the same genre
  const related = books.filter((b) => b.genre === book.genre && b.id !== book.id);

  function handleAdd() {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/books">Books</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{book.title}</li>
        </ol>
      </nav>

      <div className="row g-5 mt-1 align-items-start">
        <div className="col-md-5 col-lg-4">
          <div className="details-cover">
            <BookCover book={book} big />
          </div>
        </div>

        <div className="col-md-7 col-lg-8 fade-up">
          <span className="badge-genre mb-3 d-inline-block">{book.genre}</span>
          <h1 className="display-5 mb-2">{book.title}</h1>
          <p className="text-muted fs-5 mb-4">
            by <span className="text-brand fw-semibold">{book.author}</span>
          </p>

          <p className="fs-2 fw-bold text-brand mb-4">${book.price.toFixed(2)}</p>

          <p className="fs-6 mb-4" style={{ maxWidth: 640 }}>{book.description}</p>

          <div className="meta-grid mb-4" style={{ maxWidth: 520 }}>
            <div className="meta-item">
              <div className="label">Pages</div>
              <div className="value">{book.pages}</div>
            </div>
            <div className="meta-item">
              <div className="label">Published</div>
              <div className="value">{book.year}</div>
            </div>
            <div className="meta-item">
              <div className="label">Genre</div>
              <div className="value">{book.genre}</div>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
            <button className="btn btn-brand btn-lg" onClick={handleAdd}>
              <i className={`bi ${added ? "bi-check-lg" : "bi-bag-plus"} me-2`}></i>
              {added ? "Added to Cart" : "Add to Cart"}
            </button>
            <Link to="/cart" className="btn btn-light-subtle btn-lg">
              View Cart
            </Link>
          </div>

          <ul className="list-unstyled trust-list mb-0">
            <li><i className="bi bi-truck"></i> Free delivery in 2–4 days</li>
            <li><i className="bi bi-arrow-repeat"></i> Easy 14-day returns</li>
            <li><i className="bi bi-shield-check"></i> Secure checkout</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-5 pt-4">
          <span className="eyebrow">You may also like</span>
          <h2 className="section-title mb-4">More {book.genre} books</h2>
          <div className="row g-4">
            {related.map((b) => (
              <div className="col-6 col-md-4 col-lg-3" key={b.id}>
                <BookCard book={b} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
