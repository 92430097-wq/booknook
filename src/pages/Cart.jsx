import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import PageHeader from "../components/PageHeader.jsx";

function Cart() {
  const {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();
  const [ordered, setOrdered] = useState(false);

  function handleCheckout() {
    clearCart();
    setOrdered(true);
  }

  if (ordered) {
    return (
      <div className="container py-5">
        <div className="surface empty-state fade-up">
          <div className="icon-circle mb-3">
            <i className="bi bi-check2-circle"></i>
          </div>
          <h2>Thank you for your order!</h2>
          <p className="text-muted">Your books are on their way.</p>
          <Link to="/books" className="btn btn-brand mt-2">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <>
        <PageHeader title="Your Cart" crumb="Cart" />
        <div className="container py-5">
          <div className="surface empty-state">
            <div className="icon-circle mb-3">
              <i className="bi bi-bag"></i>
            </div>
            <h2>Your cart is empty</h2>
            <p className="text-muted">Looks like you have not added any books yet.</p>
            <Link to="/books" className="btn btn-brand mt-2">
              Start Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Your Cart"
        subtitle={`You have ${totalItems} ${totalItems === 1 ? "item" : "items"} in your cart.`}
        crumb="Cart"
      />

      <div className="container py-5">
        <div className="row g-4">
          {/* Cart items */}
          <div className="col-lg-8">
            <div className="surface">
              {cart.map((item) => (
                <div className="cart-item d-flex align-items-center gap-3 flex-wrap" key={item.id}>
                  <Link to={`/books/${item.id}`} className="cart-thumb text-decoration-none">
                    <div className="book-cover mini" style={{ backgroundColor: item.color }}></div>
                  </Link>
                  <div className="flex-grow-1" style={{ minWidth: 160 }}>
                    <Link to={`/books/${item.id}`} className="text-decoration-none">
                      <h6 className="mb-1 font-serif fs-5">{item.title}</h6>
                    </Link>
                    <small className="text-muted d-block">{item.author}</small>
                    <small className="text-muted">${item.price.toFixed(2)} each</small>
                  </div>
                  <div className="qty-control">
                    <button onClick={() => decreaseQty(item.id)} aria-label="Decrease quantity">
                      <i className="bi bi-dash"></i>
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => addToCart(item)} aria-label="Increase quantity">
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                  <div className="fw-bold text-end" style={{ width: 80 }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                  <button
                    className="btn-icon-danger"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.title}`}
                    title="Remove"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between mt-3">
              <Link to="/books" className="btn btn-light-subtle">
                <i className="bi bi-arrow-left me-1"></i> Continue Shopping
              </Link>
              <button className="btn btn-link text-muted text-decoration-none" onClick={clearCart}>
                Clear cart
              </button>
            </div>
          </div>

          {/* Order summary */}
          <div className="col-lg-4">
            <div className="surface p-4 summary-card">
              <h5 className="mb-4">Order Summary</h5>
              <div className="summary-row">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span className="text-brand fw-semibold">Free</span>
              </div>
              <hr />
              <div className="summary-row total">
                <span>Total</span>
                <span className="text-brand">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="btn btn-brand btn-lg w-100 mt-3" onClick={handleCheckout}>
                <i className="bi bi-lock me-2"></i>Checkout
              </button>
              <p className="text-muted small text-center mt-3 mb-0">
                <i className="bi bi-shield-check me-1"></i> Secure checkout guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
