import Card from "../components/Card";
import Form from "../components/Form";
import { useEffect , useState } from "react";

const Home = () => {

  const [editmode,setEditmode] = useState({editmode:false,id:null})

  const [users, setUsers] = useState(() => {
    const savedusers = localStorage.getItem("users");
    return savedusers ? JSON.parse(savedusers) : [];
 });

  useEffect(() => {
    localStorage.setItem("users",JSON.stringify(users));
  },[users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

 const editUser = (id) => {
      setEditmode({editmode:true,id})
      console.log(id)
 }


  const deleteUser = (id) => {
      setUsers(users.filter((user) => 
      user.id !== id));
  }

  return (
    <div>
      <header>
        <h1>Contact Manager</h1>
      </header>

      <Form addUser={addUser} />

      <div className="cards">
        {users.map((user, id) => (
          <Card key={user.id} setEditmode={setEditmode} editmode={editmode}  user={user}
          onDelete={deleteUser}
          edit={editUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;