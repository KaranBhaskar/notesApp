import React from "react";
import Tiptap from "./Tiptap";

export default function Slidebar({ getCurrentNoteId, updateCurrentNote }) {
  return (
    <div className="notepad">
      <Tiptap
        getCurrentNoteId={getCurrentNoteId}
        updateCurrentNote={updateCurrentNote}
      />
    </div>
  );
}
