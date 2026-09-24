import Card from "../components/Card";
import Form from "../components/Form";
import { useEffect, useState } from "react";

const Home = () => {
//   const [users, setUsers] = useState([]);
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

  const deleteUser = (id) => {
      setUsers(users.filter((user) => 
      user.id !== id));
  }

  return (
    <div>
      <header>
        <h1>User Manage</h1>
      </header>

      <Form addUser={addUser} />

      <div className="cards">
        {users.map((user, id) => (
          <Card key={user.id} user={user}
          onDelete={deleteUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;