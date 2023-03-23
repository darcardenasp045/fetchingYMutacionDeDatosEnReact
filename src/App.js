import "./styles.css";
import Note from "./Note.js";
import { useState } from "react";

export default function App(props) {
  const [notas, setNotas] = useState(props.notas);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notas.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };

    setNotas(notas.concat(noteToAddToState));
    setNewNote("");
    console.log(noteToAddToState);
  };
  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  if (typeof notas === undefined || notas === null) {
    return "no hay notas";
  }

  return (
    <div className="App">
      <ol>
        <ul>
          <h1>Notas</h1>
          <button onClick={handleShowAll}>
            {showAll ? "Show Only Importan" : "Show all"}
          </button>
          {notas
            .filter((nota) => {
              if (showAll === true) return true;
              return nota.important === true;
            })
            .map((note) => {
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
