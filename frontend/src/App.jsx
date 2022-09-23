import { useState, useEffect } from "react";
import useAccounts from "./hooks/useAccounts";
import useSendFile from "./hooks/useSendFile";
import CustomTable from "./components/CustomTable";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  // Obtener el xlxs
  const [csv, setCsv] = useState();
  // Loading de Subir archivo set en falso
  const [loading, setLoading] = useState(false);
  //

  //
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

  return (
    <div>
      {loading && <p>Loading file...</p>}
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="file"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          onChange={(event) => {
            setCsv(event.target.files[0]);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="inputGroupFileAddon04"
        >
          Button
        </button>
      </form>
      <CustomTable />
    </div>
  );
}

export default App;
