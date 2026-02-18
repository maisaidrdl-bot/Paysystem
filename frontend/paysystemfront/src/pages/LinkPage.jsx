/* import { Link } from "react-router-dom";

export default function LinkPage({ title, links }) {
  return (
    <div className="page">
      <h1>{title}</h1>

      <div className="link-grid">
        {links.map((l, i) => (
          <Link key={i} to={l.to || "/"} className="page-link">
            {l.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
*/
import { Link } from "react-router-dom";

export default function LinkPage({ title, links, className }) {
  return (
    <div className={`page-container ${className || ""}`}>
      <h1 className="page-title">{title}</h1>

      <div className="reports-wrapper">
        <div className="report-box">
          <h2 className="report-heading">{title}</h2>

          <div className="report-links">
            {links.map((l, i) => (
              <Link key={i} to={l.to || "/"} className="report-link">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
