import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      return;
    }

    const result = register({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password
    });

    if (result.success) {
      navigate("/login");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <p className="eyebrow">JOIN SHOPEASE</p>
        <h1>Create an account</h1>
        <p className="muted">It only takes a moment.</p>
        {message && <p className="message error">{message}</p>}
        <label>Full name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Email address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="6" required />
        <label>Confirm password</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button className="button primary full-button">Create account</button>
        <p className="form-bottom">Already registered? <Link to="/login">Login</Link></p>
        <p className="small-note">Demo only: account details are stored in this browser.</p>
      </form>
    </div>
  );
}

export default Register;
