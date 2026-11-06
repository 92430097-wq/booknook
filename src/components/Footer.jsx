import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <Link className="navbar-brand d-flex align-items-center gap-2 font-serif fs-3 fw-bold mb-3" to="/">
              <span className="brand-mark">
                <i className="bi bi-book-half"></i>
              </span>
              BookNook
            </Link>
            <p className="mb-4" style={{ maxWidth: 320 }}>
              A small online bookstore for timeless classics. Find your next
              great read and have it delivered to your door.
            </p>
            <div className="footer-social d-flex gap-2">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="X"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Shop</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/books">All Books</Link></li>
              <li><Link to="/cart">Your Cart</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Company</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6>Get in touch</h6>
            <ul className="list-unstyled mb-0">
              <li><i className="bi bi-geo-alt me-2"></i>Beirut, Lebanon</li>
              <li><i className="bi bi-telephone me-2"></i>+961 1 234 567</li>
              <li><i className="bi bi-envelope me-2"></i>Elya@booknook.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© {new Date().getFullYear()} BookNook. All rights reserved.</span>
          <span>CSCI426 Project-Elya semaan-92430097</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
