import { useState } from 'react'
import { useStudents } from '../context/StudentContext'

const EditForm = ({ student, cancelEdit }) => {
  const { editStudent } = useStudents()
  const [updatedStudent, setUpdatedStudent] = useState({
    name: student.name, email: student.email, age: student.age
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setUpdatedStudent(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editStudent({ ...updatedStudent, id: student.id })
    cancelEdit()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
      <input name="name" value={updatedStudent.name} onChange={handleInput} placeholder="Name" className="rounded border bg-white p-2" required />
      <input name="email" type="email" value={updatedStudent.email} onChange={handleInput} placeholder="Email" className="rounded border bg-white p-2" required />
      <input name="age" type="number" value={updatedStudent.age} onChange={handleInput} placeholder="Age" className="rounded border bg-white p-2" required />
      <div className="flex gap-2">
        <button className="rounded bg-green-600 px-3 py-2 text-white">Update</button>
        <button type="button" onClick={cancelEdit} className="rounded bg-gray-500 px-3 py-2 text-white">Cancel</button>
      </div>
    </form>
  )
}
export default EditForm