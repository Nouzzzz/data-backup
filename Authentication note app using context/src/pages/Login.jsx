import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
        <div className="p-3 text-sm">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input value={userdata.username} name="username"  onChange={handleInput} type="text" placeholder="Username" />
                <input value={userdata.password} name="password" onChange={handleInput} type="password"  placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;