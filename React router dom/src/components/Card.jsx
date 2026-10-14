import { useState } from 'react'
import EditForm from './EditForm'

function Card({ student, deleteStudent, editStudent }) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-100 p-5 shadow-sm">
      {isEditing ? (
        <>
          <h3 className="text-lg font-bold">Update Student</h3>
          <EditForm
            student={student}
            editStudent={editStudent}
            cancelEdit={() => setIsEditing(false)}
          />
        </>
      ) : (
        <>
          <h3 className="mb-2 text-lg font-bold">{student.name}</h3>
          <p className="break-words">{student.email}</p>
          <p className="mb-4">Age: {student.age}</p>
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)}
              className="rounded bg-blue-600 px-4 py-2 text-white">
              Edit
            </button>
            <button onClick={() => deleteStudent(student.id)}
              className="rounded bg-red-600 px-4 py-2 text-white">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Card
