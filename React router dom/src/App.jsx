
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddStudents from './pages/AddStudents'
import Details from './pages/Details'

const App = () =>  {
  const [students, setStudents] = useState(() => {
    return JSON.parse(localStorage.getItem('students')) || []
  })

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

const addStudent = (student) => {
  setStudents([...students, { ...student, id: Date.now() }])
}

const deleteStudent = (id) => {
  setStudents(students.filter(student => student.id !== id))
}

const editStudent = (updatedStudent) => {
  setStudents(students.map(student =>
    student.id === updatedStudent.id ? updatedStudent : student
  ))
}

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/AddStudents"
          element={<AddStudents addStudent={addStudent} />}
        />

        <Route
          path="/ListStudents"
          element={
            <Details
              students={students}
              deleteStudent={deleteStudent}
              editStudent={editStudent}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
