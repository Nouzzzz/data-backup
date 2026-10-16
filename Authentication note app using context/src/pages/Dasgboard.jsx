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


    
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {filterNotes(notes).map((note, index) => (
    <Card
      key={note.id ?? `${note.owner}-${index}`}
      note={note}
    />
  ))}
</div>


{/* <div>
  {filterNotes(notes).map((note, index) => (
    <Card
      key={note.id ?? `${note.owner}-${index}`}
      note={note}
    />
  ))}
</div> */}


    </div>
  )
}

export default Dasgboard
