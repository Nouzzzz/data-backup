
import { createContext, useState, useEffect } from "react";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = (data) => {
    setNotes((prev) => [...prev, data]);
  };

  const updateNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <NoteContext.Provider
      value={{ notes, createNote, updateNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;










// import { createContext, useState, useEffect } from "react";

// const NoteContext = createContext();

// export const NoteProvider = ({ children }) => {
//   const [notes, setNotes] = useState(() => {
//     return JSON.parse(localStorage.getItem("notes")) || [];
//   });

//  const createNote = (data) => {
//   setNotes((prev) => [...prev, data]);
// };

// useEffect(() => {
//   localStorage.setItem("notes", JSON.stringify(notes));
// }, [notes]);

//   return (
//     <NoteContext.Provider value={{ notes, createNote }}>
//       {children}
//     </NoteContext.Provider>
//   );
// };

// export default NoteContext;
