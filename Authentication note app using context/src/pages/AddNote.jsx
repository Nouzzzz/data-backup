import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import NoteContext from "../context/NoteContext";

const AddNote = () => {

    const { currentUser } = useContext(AuthContext);
    const {createNote,notes} = useContext(NoteContext)

     const [data, setdata] = useState({
        title: "",
        details: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;

        setdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newnote = {
            title: data.title,
            details: data.details,
            owner: currentUser.id
        };

        createNote(newnote);

    }

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
