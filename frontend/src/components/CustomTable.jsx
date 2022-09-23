import * as React from "react";
import Fragment from "react";
import { useState } from "react";
import useAccounts from "../hooks/useAccounts";
import TableRows from "./TableRow";
import SelectedForm from "./SelectedForm";
import Pagination from "./Pagination";

export default function CustomTable() {
  // Muestra la pagina 1 al iniciar
  const [page, setPage] = useState(1);

  // F
  const [filter, setFilter] = useState(1);

  // Retorno las páginas y cargo loading de la tabla
  // El loading funciona dentro del hook
  const { accounts, loading: accountsLoading } = useAccounts(page);

  const [selectedRecord, setSelectedRecord] = useState({});

  const handleUpdate = (account) => {
    const newAccounts = accounts.map((e) =>
      e._id !== account._id ? e : account
    );
    setAccounts(newAccounts);
  };

  const handleRecordChange = (account) => {
    if (account._id === selectedRecord._id) {
      setSelectedRecord({});
    } else {
      setSelectedRecord(account);
    }
  };

  if (accountsLoading)
    return (
      <div>
        <h1>Loading data...</h1>
      </div>
    );

  return (
    <div>
      {/* Filter */}
      <div className="input-group mb-3">
        <p class="h1">Filter</p>
        <input
          type="text"
          className="form-control"
          placeholder
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Description
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Account
        </button>
      </div>
      {/* Table */}
      {selectedRecord._id && <SelectedForm account={selectedRecord} />}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">AcctType</th>
            <th scope="col">Account</th>
            <th scope="col">Description</th>
            <th scope="col">Department</th>
            <th scope="col">TypicalBal</th>
            <th scope="col">DebitOffset</th>
            <th scope="col">CreditOffset</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <>
              <TableRows
                account={account}
                handleRecordChange={handleRecordChange}
                selectedRecord={selectedRecord}
              />
            </>
          ))}
        </tbody>
      </table>
      <Pagination setPage={setPage} page={page} accounts={accounts} />
    </div>
  );
}
