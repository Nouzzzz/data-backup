import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [userdata, setUserdata] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newuser = {
      id: Date.now(),
      username: userdata.username,
      password: userdata.password,
    };

    const registered = registerUser(newuser);

    if (registered) {
      setUserdata({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="p-3 text-sm">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input value={userdata.username} name="username"  onChange={handleInput} type="text" placeholder="Username" />
        <input value={userdata.password} name="password" onChange={handleInput} type="password"  placeholder="Password"/>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

