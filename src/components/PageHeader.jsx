import { Link } from "react-router-dom";

// Title banner used at the top of inner pages
function PageHeader({ title, subtitle, crumb }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {crumb || title}
            </li>
          </ol>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p className="text-muted mb-0 fs-5">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
