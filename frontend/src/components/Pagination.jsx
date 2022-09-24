export default function Pagination({ handlePageChange, page, accounts }) {
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li
            className="page-item"
            onClick={() => {
              if (page > 1) {
                handlePageChange(page - 1);
              }
            }}
          >
            <button className="btn btn-outline-secondary">Previous</button>
          </li>
          <li
            className="page-item"
            onClick={() => {
              if (accounts.length !== 0) {
                handlePageChange(page + 1);
              }
            }}
          >
            <button className="btn btn-outline-secondary">Next</button>
          </li>
        </ul>
      </nav>
      <div className="table"></div>
    </>
  );
}
