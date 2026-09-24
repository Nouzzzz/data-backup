import { useState } from "react";

const Form = ({ addUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            id: Date.now(),
            name,
            email,
            age,
        };

        addUser(user);

        setName("");
        setEmail("");
        setAge("");
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <h2 className="formheader">FORM</h2> */}
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <button className="submitbtn" type="submit">Submit</button>
        </form>
    );
};

export default Form;
