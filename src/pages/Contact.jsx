import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";

const info = [
  { icon: "bi-geo-alt", label: "Address", value: "Beirut, Lebanon" },
  { icon: "bi-telephone", label: "Phone", value: "+961 1 234 567" },
  { icon: "bi-envelope", label: "Email", value: "hello@booknook.com" },
  { icon: "bi-clock", label: "Opening hours", value: "Mon – Sat, 9am – 6pm" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question about an order or a book? We would love to hear from you."
        crumb="Contact"
      />

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h3 className="mb-2">Get in touch</h3>
              <p className="mb-4" style={{ opacity: 0.8 }}>
                Our team usually replies within one business day.
              </p>
              {info.map((i) => (
                <div className="contact-line" key={i.label}>
                  <span className="ci"><i className={`bi ${i.icon}`}></i></span>
                  <div>
                    <small>{i.label}</small>
                    <span className="fw-semibold">{i.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="surface p-4 p-md-5 h-100">
              <h3 className="mb-1">Send us a message</h3>
              <p className="text-muted mb-4">Fill in the form and we will get back to you.</p>

              {sent && (
                <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
                  <i className="bi bi-check-circle-fill"></i>
                  Thank you! We will reply soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="form-control"
                      placeholder="How can we help?"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-brand btn-lg w-100">
                      <i className="bi bi-send me-2"></i>Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
