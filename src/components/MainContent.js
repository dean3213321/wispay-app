const MainContent = ({ toggleSidebar }) => {
  return (
    <div className="main-content">
      <h2>Dashboard</h2>

      {/* Real Time Transaction Heading */}
      <h3>Real Time Transaction</h3>

      {/* Table Container */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reference Code</th>
              <th>Price & Product</th>
              <th>Quantity</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Transaction Date</th>
              <th>Processed By</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows will be dynamically populated later using MySQL data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;