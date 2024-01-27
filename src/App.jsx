import { useState } from "react";
import Editor from "./components/Editor";
import Slidebar from "./components/Slidebar";
import Split from "react-split";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteID, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  function addNotes() {
    const note = {
      id: nanoid(),
      body: "#Add any heading here",
    };
    setNotes((prevNotes) => [note, ...prevNotes]);
    setCurrentNoteId(note.id);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  function getCurrentNote() {
    return notes.find((note) => note.id === currentNoteID) || notes[0];
  }

  return (
    <main>
      {notes.length ? (
        <Split className="split" sizes={[30, 70]}>
          <Editor
            notes={notes}
            addNotes={addNotes}
            deleteNote={deleteNote}
            getCurrentNoteId={getCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
          />
          <Slidebar />
        </Split>
      ) : (
        <div className="Blank--notes">
          <h1>Add New note</h1>
          <button onClick={addNotes}>Add note +</button>
        </div>
      )}
    </main>
  );
}
export default App;
