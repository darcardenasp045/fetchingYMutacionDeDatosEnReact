import "./styles.css";
import Note from "./Note.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App(props) {
  const [notas, setNotas] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios.get(" http://localhost:3001/persons").then((response) => {
        const { data } = response;
        console.log(response);
        setNotas(data);
        setLoading(false);
      });
    }, 2000);
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notas.length + 1,
      name: newNote,
      number: newNote
    };

    axios.post(" http://localhost:3001/persons",noteToAddToState);

    setNotas(notas.concat(noteToAddToState));
    setNewNote("");
    console.log(noteToAddToState);
  };

  if (typeof notas === undefined || notas === null) {
    return "no hay notas";
  }

  return (
    <div className="App">
      <ol>
        <ul>
          <h1>Notas</h1>
          {loading ? "Cargando...." : ""}
          {notas.map((note) => {
            return <Note key={note.id} {...note} />;
          })}
        </ul>
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button> Crear Nota</button>
      </form>
    </div>
  );
}
