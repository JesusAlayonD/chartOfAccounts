import { useState, useEffect } from "react";
import useAccounts from "../hooks/useAccounts";
import useSendFile from "../hooks/useSendFile";

export default function () {
  // Obtener el xlxs
  const [csv, setCsv] = useState();
  // Loading de Subir archivo set en falso
  const [loading, setLoading] = useState(false);

  const page = 1;
  const filter = 1;
  const filterData = "";
  const { getData } = useAccounts(page, filter, filterData);

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
    getData();
  };

  return (
    <>
      <h1 className="display-6">Subir Archivo</h1>
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
          Upload
        </button>
      </form>
      {loading && <p>Loading file...</p>}
    </>
  );
}
