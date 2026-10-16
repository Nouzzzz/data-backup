
import { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";

const Card = ({ note }) => {
  const { updateNote, deleteNote } = useContext(NoteContext);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  const handleEdit = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    updateNote({
      ...note,
      title: title.trim(),
      details: details.trim(),
    });

    setEditing(false);
    alert("Note updated successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note.id);
      alert("Note deleted successfully!");
    }
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
      {editing ? (
        <form onSubmit={handleEdit} className="space-y-3">
          <input
            className="w-full rounded border p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />

          <textarea
            className="w-full rounded border p-2"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Details"
            rows="3"
            required
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => setEditing(false)}
              className="rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            {note.title}
          </h2>

          <p className="mb-4 whitespace-pre-wrap text-gray-600">
            {note.details}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => setEditing(true)}
              className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;







// import React from 'react'
// import NoteContext from '../context/NoteContext'

// const Card = ({ note }) => {

//   return (
//     <div>
//        <h1>{note.title}</h1>
//        <p>{note.details}</p>
//     </div>
//   )
// }

// export default Card
