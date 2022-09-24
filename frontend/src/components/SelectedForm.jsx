export default function SelectedForm({ account, handleUpdate, handleDelete }) {
  return (
    <div className="">
      {/* Flex y flex direction row */}
      <form className="d-flex flex-row">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            const data = {
              _id: account._id,
              AcctType: account.AcctType,
              Account: account.Account,
              Description: account.Description,
              Department: account.Department,
              TypicalBal: account.TypicalBal,
              DebitOffset: account.DebitOffset,
              CreditOffset: account.CreditOffset,
            };
            handleUpdate(data);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            handleDelete(account._id);
          }}
        >
          Eliminar
        </button>
        <input
          className="form-control"
          type="text"
          defaultValue={account.AcctType}
          onChange={(event) => {
            account.AcctType = event.target.value;
          }}
          placeholder="AcctType"
        />
        <input
          className="form-control"
          type="text"
          defaultValue={account.Account}
          onChange={(event) => {
            account.Account = event.target.value;
          }}
          placeholder="Account"
        />
        <input
          className="form-control"
          type="text"
          defaultValue={account.Description}
          onChange={(event) => {
            account.Description = event.target.value;
          }}
          placeholder="Description"
        />
        <input
          className="form-control"
          type="text"
          defaultValue={account.Department}
          onChange={(event) => {
            account.Department = event.target.value;
          }}
          placeholder="Department"
        />
        <input
          className="form-control"
          type="text"
          defaultValue={account.TypicalBal}
          onChange={(event) => {
            account.TypicalBal = event.target.value;
          }}
          placeholder="TypicalBal"
        />
        <input
          className="form-control"
          type="text"
          defaultValue={account.DebitOffset}
          onChange={(event) => {
            account.DebitOffset = event.target.value;
          }}
          placeholder="DeditOffset"
        />
        <input
          className="form-control"
          type="text"
          defaultValue={account.CreditOffset}
          onChange={(event) => {
            account.CreditOffset = event.target.value;
          }}
          placeholder="CreditOffset"
        />
      </form>
    </div>
  );
}
