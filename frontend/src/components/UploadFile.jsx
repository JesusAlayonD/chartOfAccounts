export default function ({ handleSubmit, setCsv }) {
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
    </>
  );
}
