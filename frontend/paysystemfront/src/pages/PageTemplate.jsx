export default function PageTemplate({ title }) {
  const features = [
    "Generate Statement",
    "Transfer Funds",
    "View Analytics",
    "Download Report",
    "Manage Access"
  ];

  return (
    <div className="main">
      <div className="page-title">{title}</div>

      <div className="card-grid">
        {features.map((f, i) => (
          <div className="card" key={i}>
            <div className="card-title">{f}</div>
            <div className="card-desc">
              Secure financial module with premium controls.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
