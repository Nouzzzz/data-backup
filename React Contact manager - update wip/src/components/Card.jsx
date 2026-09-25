import Editform from "./Editform";

const Card = ({ user,onDelete,edit, editmode , setEditmode }) => {  

  return (
    <div className="card">

      {
        editmode.editmode == true && user.id == editmode.id ? <> <Editform setEditmode={setEditmode} editmode={editmode} /> </> : <> <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Phone: {user.phone}</p>

      
      <div className="btns">

 <button className="editbtn" onClick={() => {
        edit(user.id)
      }}>Edit</button>

      <button className="deletebtn" onClick={() => {
        onDelete(user.id)
      }}>Delete</button>
      

      </div> </>
      }
      
    
    </div>
  );
};

export default Card;     