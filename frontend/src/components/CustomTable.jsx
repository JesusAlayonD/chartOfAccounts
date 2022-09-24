import * as React from "react";
import Fragment from "react";
import { useState } from "react";
import useAccounts from "../hooks/useAccounts";
import useUpdate from "../hooks/useUpdate";
import useDelete from "../hooks/useDelete";
import TableRows from "./TableRow";
import SelectedForm from "./SelectedForm";
import Pagination from "./Pagination";
import Filter from "./Filter";

export default function CustomTable() {
  // Muestra la pagina 1 al iniciar
  const [page, setPage] = useState(1);

  // Tipo de busqueda y los datos para busqueda
  const [filter, setFilter] = useState(1);
  const [filterData, setFilterData] = useState("");

  const [message, setMessage] = useState("");

  // Retorno las páginas y cargo loading de la tabla
  // El loading funciona dentro del hook
  const {
    accounts,
    loading: accountsLoading,
    getData,
  } = useAccounts(page, filter, filterData);
  const [selectedRecord, setSelectedRecord] = useState({});

  const handleFilterOriginal = () => {
    getData();
    setPage(1);
    setFilter(1);
    setMessage("");
    setSelectedRecord({});
  };

  const handleFilterDesc = (message) => {
    getData();
    setPage(1);
    setFilter(2);
    setFilterData(message);
    setSelectedRecord({});
  };

  const handleFilterAcc = (message) => {
    getData();
    setPage(1);
    setFilter(3);
    setFilterData(message);
    setSelectedRecord({});
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  if (accountsLoading)
    return (
      <div class="text-center">
        <div class="spinner-border" role="status"></div>
      </div>
    );

  const handleRecordChange = (account) => {
    if (account._id === selectedRecord._id) {
      setSelectedRecord({});
    } else {
      setSelectedRecord(account);
    }
  };

  const handleUpdate = async (account) => {
    const res = await useUpdate(account._id, account);
    getData();
  };

  const handleDelete = async (id) => {
    const res = await useDelete(id);
    getData();
  };

  return (
    <div>
      <Filter
        handleFilterOriginal={handleFilterOriginal}
        handleFilterDesc={handleFilterDesc}
        handleFilterAcc={handleFilterAcc}
        message={message}
        handleChange={handleChange}
      />
      {/* Table */}
      {selectedRecord._id && (
        <SelectedForm
          account={selectedRecord}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      )}
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
