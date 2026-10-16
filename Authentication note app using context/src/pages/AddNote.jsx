import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import NoteContext from "../context/NoteContext";

const AddNote = () => {
  const { currentUser } = useContext(AuthContext);
  const { createNote } = useContext(NoteContext);

  const [data, setData] = useState({
    title: "",
    details: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Please login first!");
      return;
    }

    if (!data.title.trim() || !data.details.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: data.title.trim(),
      details: data.details.trim(),
      owner: currentUser.id,
    };

    createNote(newNote);

    alert("Note added successfully!");

    setData({
      title: "",
      details: "",
    });
  };

  return (
    <div>
      
  <form onSubmit={handleSubmit}>
                <input value={data.title} name="title"  onChange={handleInput} type="text" placeholder="Title" />
                <input value={data.details} name="details" onChange={handleInput} type="text"  placeholder="Details"/>
                <button type="submit">Add note</button>
            </form> 

    </div>
  )
}

export default AddNote
