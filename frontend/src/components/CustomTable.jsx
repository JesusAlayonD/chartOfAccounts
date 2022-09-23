import * as React from "react";
import { useState } from "react";
import useAccounts from "../hooks/useAccounts";

export default function CustomTable() {
  // Muestra la pagina 1 al iniciar
  var [page, setPage] = useState(1);
  // Retorno las páginas y cargo loading de la tabla
  // El loading funciona dentro del hook
  const { accounts, loading: accountsLoading } = useAccounts(page);

  const [selectedRecord, setSelectedRecord] = useState({});

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
          {accounts.map((account, index) => (
            <>
              <tr
                key={index.toString()}
                onClick={() => handleRecordChange(account)}
              >
                <td>{account.AcctType}</td>
                <td>{account.Account}</td>
                <td>{account.Description}</td>
                <td>{account.Department}</td>
                <td>{account.TypicalBal}</td>
                <td>{account.DebitOffset}</td>
                <td>{account.CreditOffset}</td>
              </tr>
              {/* Selected */}
              {account._id === selectedRecord._id ? (
                <div className="flex-container">
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
              ) : null}
            </>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item" onClick={() => console.log("prev")}>
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li
            className="page-item"
            onClick={() => {
              page = page + 1;
              setPage({ page: page });
            }}
          >
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div className="table"></div>
      {selectedRecord._id && (
        <div className="editables">
          Solo se muestra si hay un record seleccionado
        </div>
      )}
    </div>
  );
}
