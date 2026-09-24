const Card = ({ user,onDelete }) => {  

  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      
      <div className="btns">
      <button className="deletebtn" onClick={() => {
        onDelete(user.id)
      }}  >Delete</button>
      </div>
    
    </div>
  );
};

export default Card;