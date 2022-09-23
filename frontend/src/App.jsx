import { useState, useEffect } from "react";
import useAccounts from "./hooks/useAccounts";
import useSendFile from "./hooks/useSendFile";
import CustomTable from "./components/CustomTable";
import UploadFile from "./components/UploadFile";
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
      <UploadFile handleSubmit={handleSubmit} setCsv={setCsv} />
      {loading && <p>Loading file...</p>}
      <CustomTable />
    </div>
  );
}

export default App;
