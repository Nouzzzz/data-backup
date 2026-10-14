import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">Student Manager</NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/add-student">Add student</NavLink>
        <NavLink to="/students">List students</NavLink>
      </nav>
    </header>
  );
}
