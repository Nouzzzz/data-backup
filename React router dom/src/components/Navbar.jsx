import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-800 px-6 py-5 text-white">
      <h1 className="text-lg">Student Manager</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/AddStudents">Add student</Link>
        <Link to="/ListStudents">List students</Link>
      </div>
    </nav>
  )
}

export default Navbar
