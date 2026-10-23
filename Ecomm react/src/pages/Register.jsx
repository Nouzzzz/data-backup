import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
    const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""

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
      email: userdata.email,
      password: userdata.password,
      password2: userdata.password2
    };

    const registered = registerUser(newuser);

    if (registered) {
      setUserdata({
        username: "",
        email: "",
        password: "",
         password2 : "",
      });
    }
  };

  return (
    <div className={`min-h-screen p-3 flex items-center justify-center
     ${ darkMode ? "min-h-screen bg-black text-white"  : "min-h-screen bg-white text-black"  }`} >
        
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center shadow-lg p-5 gap-3 rounded-md bg-gray-200 '>

        <input value={userdata.username} name="username"  onChange={handleInput} type="text" placeholder="Enter Name" />
         <input value={userdata.email} name="email"  onChange={handleInput} type="text" placeholder="Enter email" />

        <input value={userdata.password} name="password" onChange={handleInput} type="password"  placeholder="Enter Password"/>
        <input value={userdata.password2} name="password2" onChange={handleInput} type="password"  placeholder="confirm Password"/>

        <button className="bg-blue-600 text-white rounded-md p-1 text-xs " type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

