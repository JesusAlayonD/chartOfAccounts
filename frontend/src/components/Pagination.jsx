export default function Pagination({ setPage, page, accounts }) {
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li
            className="page-item"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            <button className="page-link">Previous</button>
          </li>
          <li
            className="page-item"
            onClick={() => {
              console.log(accounts);
              if (accounts.length !== 0) {
                setPage(page + 1);
              }
            }}
          >
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
      <div className="table"></div>
    </>
  );
}
