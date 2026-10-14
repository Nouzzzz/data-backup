import { useState } from 'react'
import { useStudents } from '../context/StudentContext'
import Card from '../components/Card'

const Details = () => {
  const { students } = useStudents()
  const [search, setSearch] = useState('')
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg">List Students</h2>
      <input type="text" placeholder="Search students..." value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-5 w-full max-w-md rounded-lg border border-gray-300 p-3" />
      {filteredStudents.length === 0 ? (
        <p>{search ? 'No students found.' : 'No students added yet.'}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map(student => <Card key={student.id} student={student} />)}
        </div>
      )}
    </div>
  )
}
export default Details