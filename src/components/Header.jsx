import "../styles/header.css";

export default function Header({ handleDownload }) {
  return (
    <div className="header">
      <h1>CV Builder</h1>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}
