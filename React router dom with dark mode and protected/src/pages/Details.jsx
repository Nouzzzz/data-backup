import { useContext, useState } from 'react'
import Card from '../components/Card'
import { ThemeContext } from '../context/Themecontext';

function Details({ students, deleteStudent, editStudent }) {
  const [search, setSearch] = useState('')

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  )

  
  const {darkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={`min-h-screen p-4
     ${ darkMode ? "min-h-screen bg-black text-white"  : "min-h-screen bg-white text-black"  }`} >
      <h2 className="mb-4 text-lg">List Students</h2>

      <input
        className="mb-5 w-full max-w-md rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
        placeholder="Search user"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <p>{search ? 'No students found.' : 'No students added.'}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map(student => (
            <Card
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
              editStudent={editStudent}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Details
