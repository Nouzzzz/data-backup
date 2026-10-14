import { useState } from 'react'
import Card from '../components/Card'

function Details({ students, deleteStudent, editStudent }) {
  const [search, setSearch] = useState('')

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg">List Students</h2>

      <input
        className="mb-5 w-full max-w-md rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
        placeholder="Search user"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <p>{search ? 'No students found.' : 'No students added yet.'}</p>
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
