import { useState } from "react"

const Form = ({ addUser }) => {

  const [user,setUser] = useState({
    name:"",
    email:"",
    age:"",
    phone:"",
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!user.name || !user.email || !user.age || !user.phone){
      return alert('Input values are empty!')
    }

    const newuser = {
      ...user,id:Date.now()
    }

    addUser(newuser)

  };

  const handleInput = (e) => {
    const {name,value} = e.target
    setUser((prev) => ({...prev,[name]:value}))
  }

  return (

    <div className="cardout">

      <form onSubmit={handleSubmit}>

        <input onInput={handleInput} value={user.name} name="name"  type="text" placeholder="name" />
        <input onInput={handleInput} value={user.value} name="email" type="email" placeholder="email" />
        <input onInput={handleInput} value={user.age} type="number" name="age" placeholder="age" />
        <input onInput={handleInput} value={user.phone} type="number" name="phone" placeholder="phone" />

        <button className="submitbtn" type="submit">Submit</button>

      </form>
    </div>

  )
}

export default Form
