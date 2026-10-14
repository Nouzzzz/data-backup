import Form from '../components/Form'

function AddStudents({ addStudent }) {
  return (
    <div className="p-4">
      <h2 className="text-lg">Add Students</h2>
      <Form addStudent={addStudent} />
    </div>
  )
}

export default AddStudents
