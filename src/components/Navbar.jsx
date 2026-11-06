import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/books", label: "Books" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close the mobile menu and scroll to top when the page changes
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg site-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-mark">
            <i className="bi bi-book-half"></i>
          </span>
          BookNook
        </Link>

        <div className="d-flex align-items-center gap-2 order-lg-last">
          <Link
            className="btn btn-brand cart-btn ms-lg-3"
            to="/cart"
            aria-label={`Cart, ${totalItems} items`}
          >
            <i className="bi bi-bag"></i>
            <span className="d-none d-sm-inline ms-2">Cart</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"} fs-4`}></i>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="mainNav">
          <ul className="navbar-nav ms-auto gap-lg-1">
            {links.map((l) => (
              <li className="nav-item" key={l.to}>
                <NavLink className="nav-link" to={l.to} end={l.end}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
