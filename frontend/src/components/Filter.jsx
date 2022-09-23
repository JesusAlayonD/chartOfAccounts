export default function Filter({
  handleFilterOriginal,
  handleFilterDesc,
  handleFilterAcc,
  message,
  handleChange,
}) {
  return (
    <div className="input-group mb-3">
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        // 3 Será Account
        onClick={() => handleFilterOriginal()}
      >
        Original
      </button>
      <input
        type="text"
        className="form-control"
        placeholder="Type here..."
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        onChange={handleChange}
        value={message || ""}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        // 2 Será description
        onClick={() => handleFilterDesc(message)}
      >
        Description
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        // 3 Será Account
        onClick={() => handleFilterAcc(message)}
      >
        Account
      </button>
    </div>
  );
}
