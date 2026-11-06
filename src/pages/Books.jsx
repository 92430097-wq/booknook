import { useState } from "react";
import books from "../data/books.js";
import BookCard from "../components/BookCard.jsx";
import PageHeader from "../components/PageHeader.jsx";

const genres = ["All", "Romance", "Adventure", "Horror", "Mystery", "Fantasy"];

function Books() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("default");

  // filter by title or author, and by genre
  let filtered = books.filter((b) => {
    const text = search.toLowerCase();
    const matchSearch =
      b.title.toLowerCase().includes(text) ||
      b.author.toLowerCase().includes(text);
    const matchGenre = genre === "All" || b.genre === genre;
    return matchSearch && matchGenre;
  });

  // sort by price if the user chose it
  if (sort === "low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high") filtered = [...filtered].sort((a, b) => b.price - a.price);

  function resetFilters() {
    setSearch("");
    setGenre("All");
    setSort("default");
  }

  return (
    <>
      <PageHeader
        title="Browse Books"
        subtitle="Explore our full collection of timeless classics."
        crumb="Books"
      />

      <div className="container py-5">
        {/* Search, sort and genre filter */}
        <div className="toolbar mb-4">
          <div className="row g-3 align-items-center">
            <div className="col-md-8">
              <div className="input-icon">
                <i className="bi bi-search"></i>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search by title or author..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search books"
                />
              </div>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort books"
              >
                <option value="default">Sort: Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div className="d-flex flex-wrap gap-2">
            {genres.map((g) => (
              <button
                key={g}
                className={`genre-chip ${genre === g ? "active" : ""}`}
                onClick={() => setGenre(g)}
              >
                {g}
              </button>
            ))}
          </div>
          <small className="text-muted flex-shrink-0">
            Showing <strong className="text-brand">{filtered.length}</strong> of {books.length} books
          </small>
        </div>

        {/* Book grid */}
        {filtered.length > 0 ? (
          <div className="row g-4">
            {filtered.map((book) => (
              <div className="col-6 col-md-4 col-lg-3 fade-up" key={book.id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        ) : (
          <div className="surface empty-state">
            <div className="icon-circle mb-3">
              <i className="bi bi-journal-x"></i>
            </div>
            <h4>No books found</h4>
            <p className="text-muted">Try a different search term or genre.</p>
            <button className="btn btn-brand" onClick={resetFilters}>
              Reset filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
