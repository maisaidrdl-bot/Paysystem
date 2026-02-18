export default function BankStatements() {
  return (
    <div className="page-container bank-stmts">
      <h1 className="page-title">Bank Statements</h1>

      <div className="reports-wrapper">
        <div className="report-box">
          <h2 className="report-heading">Bank Statements</h2>

          <div className="report-links">

            {/* Account wise */}
            <div className="report-group">
              <strong>Account wise:</strong>
              <div className="report-group-links">
                <a href="#">SBI</a>
                <a href="#">ICICI</a>
                <a href="#">CASH</a>
              </div>
            </div>

            {/* ID Number wise */}
            <div className="report-group">
              <strong>ID Number wise:</strong>
              <div className="report-group-links">
                <a href="#">SBI</a>
                <a href="#">ICICI</a>
                <a href="#">CASH</a>
              </div>
            </div>

            {/* Softcopy */}
            <div className="report-group">
              <strong>Softcopy:</strong>
              <div className="report-group-links">
                <a href="#">SBI</a>
                <a href="#">ICICI</a>
              </div>
            </div>

            {/* Consolidated Bank Statement */}
            <div className="report-group">
              <a href="#">Consolidated Bank Statement</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
