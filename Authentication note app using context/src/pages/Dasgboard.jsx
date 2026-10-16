import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import Card from "../components/Card";
import  NoteContext  from "../context/NoteContext";

const Dasgboard = () => {
  const { currentUser } = useContext(AuthContext);
  const { notes } = useContext(NoteContext);

   const filterNotes = (notes) => {
    return notes.filter((note) => note.owner === currentUser.id);
  };

  return (
    <div className='p-3'>
      Dashboard

     <div>
         {
          filterNotes(notes).map((note) => (
            <Card key={note.id} note={note} />
          ))
         }
     </div>

    </div>
  )
}

export default Dasgboard
