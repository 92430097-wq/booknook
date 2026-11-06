import { Link } from "react-router-dom";
import books from "../data/books.js";
import BookCard from "../components/BookCard.jsx";
import BookCover from "../components/BookCover.jsx";

const features = [
  { icon: "bi-collection", title: "Curated Selection", text: "Classics across romance, adventure, horror, mystery and fantasy." },
  { icon: "bi-truck", title: "Fast Delivery", text: "Free delivery on every order, at your door in 2–4 days.", accent: true },
  { icon: "bi-shield-check", title: "Secure Checkout", text: "Add to cart and place your order in just a few seconds." },
];

const genres = [
  { name: "Romance", icon: "bi-heart" },
  { name: "Adventure", icon: "bi-compass" },
  { name: "Horror", icon: "bi-moon-stars" },
  { name: "Mystery", icon: "bi-search" },
  { name: "Fantasy", icon: "bi-stars" },
];

function Home() {
  // show only the first 4 books on the home page
  const featured = books.slice(0, 4);
  const genreCount = new Set(books.map((b) => b.genre)).size;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start fade-up">
              <span className="hero-pill mb-4">
                <span className="dot">New</span> Timeless classics, fair prices
              </span>
              <h1 className="mb-4">
                Your next <span className="highlight">great read</span> is
                waiting for you
              </h1>
              <p className="lead text-muted mb-4 mx-auto mx-lg-0" style={{ maxWidth: 500 }}>
                Discover beloved novels, search by title or author, and have
                your favorite books delivered straight to your door.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <Link to="/books" className="btn btn-brand btn-lg">
                  Browse Books <i className="bi bi-arrow-right ms-1"></i>
                </Link>
                <Link to="/about" className="btn btn-light-subtle btn-lg">
                  Learn More
                </Link>
              </div>

              <div className="hero-stats d-flex gap-4 gap-md-5 mt-5 justify-content-center justify-content-lg-start">
                <div>
                  <div className="stat-value">{books.length}+</div>
                  <div className="stat-label">Classic titles</div>
                </div>
                <div>
                  <div className="stat-value">{genreCount}</div>
                  <div className="stat-label">Genres</div>
                </div>
                <div>
                  <div className="stat-value">Free</div>
                  <div className="stat-label">Delivery</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-books">
                <div className="hb hb-1"><BookCover book={books[2]} /></div>
                <div className="hb hb-2"><BookCover book={books[0]} /></div>
                <div className="hb hb-3"><BookCover book={books[4]} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {features.map((f) => (
              <div className="col-md-4" key={f.title}>
                <div className="feature-card">
                  <div className={`icon-circle ${f.accent ? "accent" : ""}`}>
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h5>{f.title}</h5>
                  <p className="text-muted mb-0">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured books */}
      <section className="pb-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
            <div>
              <span className="eyebrow">Hand-picked</span>
              <h2 className="section-title mb-0">Featured Books</h2>
            </div>
            <Link to="/books" className="btn btn-outline-brand align-self-start align-self-md-auto">
              View all books <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
          <div className="row g-4">
            {featured.map((book) => (
              <div className="col-6 col-lg-3" key={book.id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">Explore</span>
            <h2 className="section-title">Shop by Genre</h2>
            <p className="section-lead mx-auto">
              Whatever your mood, there is a classic waiting on our shelves.
            </p>
          </div>
          <div className="row g-3 justify-content-center">
            {genres.map((g) => (
              <div className="col-6 col-md-4 col-lg" key={g.name}>
                <Link to="/books" className="text-decoration-none">
                  <div className="feature-card text-center py-4">
                    <div className="icon-circle mx-auto">
                      <i className={`bi ${g.icon}`}></i>
                    </div>
                    <h6 className="mb-0">{g.name}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className="cta-band d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
          <div>
            <h2 className="mb-2">Ready to start your next chapter?</h2>
            <p className="mb-0">Browse the full collection and find a book you will love.</p>
          </div>
          <Link to="/books" className="btn btn-accent btn-lg flex-shrink-0">
            Shop Now <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
