import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStudents } from '../context/StudentContext'

const Form = () => {
  const { addStudent } = useStudents()
  const [student, setStudent] = useState({ name: '', email: '', age: '' })
  const navigate = useNavigate()

  const handleInput = (e) => {
    const { name, value } = e.target
    setStudent(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addStudent(student)
    alert('Student added successfully')
    setStudent({ name: '', email: '', age: '' })
    navigate('/ListStudents')
  }

  return (
    <div className="mx-auto mt-4 w-64 rounded-xl bg-gray-100 p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Name" value={student.name} onChange={handleInput} className="rounded p-2" required />
        <input name="email" type="email" placeholder="Email" value={student.email} onChange={handleInput} className="rounded p-2" required />
        <input name="age" type="number" placeholder="Age" value={student.age} onChange={handleInput} className="rounded p-2" required />
        <button type="submit" className="self-center rounded-lg bg-indigo-700 px-4 py-2 text-white">Submit</button>
      </form>
    </div>
  )
}
export default Form