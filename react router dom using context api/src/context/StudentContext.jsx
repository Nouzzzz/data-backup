import { createContext, useContext, useState, useEffect } from 'react'

const StudentContext = createContext()

export const StudentProvider = ({ children }) => {
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
    <StudentContext.Provider value={{ students, addStudent, deleteStudent, editStudent }}>
      {children}
    </StudentContext.Provider>
  )
}

export const useStudents = () => useContext(StudentContext)