import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

const values = [
  { icon: "bi-bullseye", title: "Our Mission", text: "Help more people discover books they will love, at a fair price." },
  { icon: "bi-book", title: "Our Books", text: "Classic novels in romance, adventure, horror, mystery and fantasy.", accent: true },
  { icon: "bi-people", title: "Our Team", text: "Built by CSCI426 students using React and Bootstrap." },
];

function About() {
  return (
    <>
      <PageHeader
        title="About BookNook"
        subtitle="Making it easy to find and buy great books online."
        crumb="About"
      />

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title">A bookstore built around readers</h2>
              <p className="lead text-muted">
                BookNook is an online bookstore that makes it easy to find and
                buy great books at a fair price.
              </p>
              <p className="text-muted">
                We started with a simple idea: buying a book online should be
                quick and easy. You can browse our books, search by title or
                author, filter by genre, read the details of each book, and add
                what you like to your cart in a few clicks.
              </p>
              <Link to="/books" className="btn btn-brand mt-2">
                Explore the collection <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="surface">
                <div className="row g-0">
                  <div className="col-6 stat-card border-end border-bottom">
                    <div className="value">8+</div>
                    <div className="label">Classic titles</div>
                  </div>
                  <div className="col-6 stat-card border-bottom">
                    <div className="value">5</div>
                    <div className="label">Genres</div>
                  </div>
                  <div className="col-6 stat-card border-end">
                    <div className="value">2–4</div>
                    <div className="label">Days delivery</div>
                  </div>
                  <div className="col-6 stat-card">
                    <div className="value">100%</div>
                    <div className="label">Free shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">What we stand for</span>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="row g-4">
            {values.map((v) => (
              <div className="col-md-4" key={v.title}>
                <div className="feature-card">
                  <div className={`icon-circle ${v.accent ? "accent" : ""}`}>
                    <i className={`bi ${v.icon}`}></i>
                  </div>
                  <h5>{v.title}</h5>
                  <p className="text-muted mb-0">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
