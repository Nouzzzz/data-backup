import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Themecontext";

const Login = () => {

    const {darkMode, toggleTheme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext);

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

        const islogged = loginUser(userdata);

        if (islogged) {
            navigate("/");
        }
    };

    return (
        <div className={`min-h-screen p-3 
          ${ darkMode ? "min-h-screen bg-black text-white"  : "min-h-screen bg-white text-black"  }`} >

            <h2>Login</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-5 align-center" >
                <input value={userdata.username} name="username"  onChange={handleInput} type="text" placeholder="Username" />
                <input value={userdata.password} name="password" onChange={handleInput} type="password"  placeholder="Password"/>
                <button type="submit" className= "  mx-auto p-1 rounded-md shadow-md">Login</button>
            </form>
        </div>
    );
};

export default Login;