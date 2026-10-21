import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {  ThemeContext } from "../context/ThemeContext";

const Login = () => {
    const navigate = useNavigate();
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const { loginUser } = useContext(AuthContext);

    const [userdata, setUserdata] = useState({
        username: "",
        email: "",
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
         

        const islogged = loginUser(userdata);

        if (islogged) {
            navigate("/");
        }
    };

    return (

  <div className={`min-h-screen p-3 flex items-center justify-center
     ${ darkMode ? "min-h-screen bg-black text-white"  : "min-h-screen bg-white text-black"  }`} >
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center shadow-lg p-5 gap-3 rounded-md bg-gray-200 '>
                <input value={userdata.username} name="username"  onChange={handleInput} type="text" placeholder="Enter Username" />
                  <input value={userdata.email} name="email"  onChange={handleInput} type="text" placeholder="Enter Email" />
                <input value={userdata.password} name="password" onChange={handleInput} type="password"  placeholder="Password"/>
                <button className="bg-green-500 text-sm text-white p-1 rounded-md flex item-center justify-center " type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;