import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { ThemeContext } from "../context/Themecontext";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const {darkMode, toggleTheme} = useContext(ThemeContext);

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
    <div className={`min-h-screen p-3
     ${ darkMode ? "min-h-screen bg-black text-white"  : "min-h-screen bg-white text-black"  }`} >
      <h2>Register</h2>

      <form onSubmit={handleSubmit} className="flex flex-col justify-center p-5 gap-2">
        <input value={userdata.username} name="username"  onChange={handleInput} type="text" placeholder="Username" />
        <input value={userdata.password} name="password" onChange={handleInput} type="password"  placeholder="Password"/>

        <button type="submit" className="shadow-md mx-auto rounded-md p-1 ">Register</button>
      </form>
    </div>
  );
};

export default Register;

