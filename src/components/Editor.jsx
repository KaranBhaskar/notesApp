import React from "react";

export default function Editor({
  notes,
  addNotes,
  deleteNote,
  getCurrentNoteId,
  setCurrentNoteId,
}) {
  const noteElements = notes.map((note, index) => {
    return (
      <div
        key={note.id}
        className={
          note.id === getCurrentNoteId.id ? "selected note--info" : "note--info"
        }
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h2 id={note.id}>
          {note.body.split("\n")[0].replace(/(<([^>]+)>)/gi, "") ||
            `Note ${index + 1}`}
        </h2>
        <button onClick={() => deleteNote(note.id)}>-</button>
      </div>
    );
  });

  return (
    <div className="editor">
      <div className="editor--heading">
        <h1>Notes</h1>
        <button onClick={addNotes}>+</button>
      </div>
      {noteElements}
    </div>
  );
}
