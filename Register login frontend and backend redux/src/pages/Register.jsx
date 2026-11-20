import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/authSlice'

const Register = () => {
    const dispatch = useDispatch();

    const user = useSelector((s) => s.auth);

    const [formdata, setFormdata] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;

        setFormdata((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(registerUser(formdata));
    };

    return (
        <div>
            <form className='p-3 flex flex-col' onSubmit={handleSubmit}>
             <input  name="username" value={formdata.username}  onChange={handleInput}type="text" placeholder="Enter username"/>
               <input  name="email" value={formdata.email}  onChange={handleInput}type="text" placeholder="Enter email"/>
              <input  name="password" value={formdata.password}  onChange={handleInput}type="text" placeholder="Enter password"/>

                <button type="submit">Register</button>
            </form>

        </div>
    );
};

export default Register;
