import { useEffect, useState } from "react";
import axios from "axios";

function Livres() {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    axios.get("https://larry-wadja-evaluation-finaleh26.onrender.com/api/livres")
  }, []);

  return (
    <>
     <h1>Bibliothèque numérique : Larry Wadja</h1>

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Auteur</th>
          </tr>
        </thead>

        <tbody>
          {livres.map((livre) => (
            <tr key={livre.id_livre}>
              <td>{livre.id_livre}</td>
              <td>{livre.titre}</td>
              <td>{livre.auteur}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Livres;
