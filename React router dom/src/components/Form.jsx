import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form({ addStudent }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    addStudent({ name, email, age })
    alert('User added successfully')
    setName('')
    setEmail('')
    setAge('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-4 flex w-64 flex-col gap-4 rounded-xl bg-gray-100 p-8"
    >
      <input className="rounded p-2 outline-none" placeholder="Name"
        value={name} onChange={e => setName(e.target.value)}/>
      <input className="rounded p-2 outline-none" placeholder="Email" type="email"
        value={email} onChange={e => setEmail(e.target.value)} />
      <input className="rounded p-2 outline-none" placeholder="Age" type="number"
        value={age} onChange={e => setAge(e.target.value)}/>
      <button className="self-center rounded-lg bg-indigo-700 px-4 py-2 text-white">
        Submit
      </button>
    </form>
  )
}

export default Form
