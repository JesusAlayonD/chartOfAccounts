import { useState, useEffect } from "react";
import useAccounts from "./hooks/useAccounts";
import useSendFile from "./hooks/useSendFile";
import CustomTable from "./components/CustomTable";

function App() {
  const [page, setPage] = useState(1);
  const { accounts, loading: accountsLoading } = useAccounts(page);
  const [csv, setCsv] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({});
  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", csv);
    const res = await useSendFile(formData);
    console.log(res);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await uploadFile();
    setLoading(false);
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
      {loading && <p>Loading file...</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(event) => {
            setCsv(event.target.files[0]);
          }}
        />
        <input type="submit" value="upload file" />
      </form>
      <input type="text" />
      <CustomTable data={accounts} />
      {/* <div className="table">
        {accounts.map((account, index) => (
          <>
            {account._id === selectedRecord._id ? <h1>Selected</h1> : null}
            <h1
              key={index.toString()}
              onClick={() => handleRecordChange(account)}
            >
              {account.Account}
            </h1>
          </>
        ))}
      </div> */}
      {selectedRecord._id && (
        <div className="editables">
          Solo se muestra si hay un record seleccionado
        </div>
      )}
    </div>
  );
}

export default App;
