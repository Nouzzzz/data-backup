import { useState } from 'react'

function EditForm({ student, editStudent, cancelEdit }) {
  const [name, setName] = useState(student.name)
  const [email, setEmail] = useState(student.email)
  const [age, setAge] = useState(student.age)

  function handleSubmit(e) {
    e.preventDefault()
    editStudent({ id: student.id, name, email, age })
    cancelEdit()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
      <input className="w-full rounded border border-gray-300 bg-white p-2"
        value={name} onChange={e => setName(e.target.value)}
        placeholder="Name" required />
      <input className="w-full rounded border border-gray-300 bg-white p-2"
        value={email} onChange={e => setEmail(e.target.value)}
        placeholder="Email" type="email" required />
      <input className="w-full rounded border border-gray-300 bg-white p-2"
        value={age} onChange={e => setAge(e.target.value)}
        placeholder="Age" type="number" required />
      <div className="flex gap-2">
        <button className="rounded bg-green-600 px-3 py-2 text-white">
          Update
        </button>
        <button type="button" onClick={cancelEdit}
          className="rounded bg-gray-500 px-3 py-2 text-white">
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditForm
