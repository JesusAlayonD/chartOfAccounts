export default function SelectedForm({ account }) {
  return (
    <div className="">
      {/* Flex y flex direction row */}
      <form className="d-flex flex-row">
        <input type="text" value={account.AcctType} />
        <input type="text" value={account.Account} />
        <input type="text" value={account.Description} />
        <input type="text" value={account.Department} />
        <input type="text" value={account.TypicalBal} />
        <input type="text" value={account.DebitOffset} />
        <input type="text" value={account.CreditOffset} />
      </form>
      <button
        type="button"
        className="btn btn-outline-dark m-3"
        onClick={() => console.log("Hola")}
      >
        Editar
      </button>
      <button type="button" className="btn btn-outline-dark">
        Eliminar
      </button>
    </div>
  );
}
