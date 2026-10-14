import { useState } from "react"

const Form = ({ addst }) => {

  const [st,setst] = useState({
    name:"",
    email:"",
    age:"",
    phone:"",
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const newst = {
      ...st,id:Date.now()
    }

    addst(newst)

  };

  const handleInput = (e) => {
    const {name,value} = e.target
    setst((prev) => ({...prev,[name]:value}))
  }


  return (

    <div className="outerform">

      <form className="innerform" onSubmit={handleSubmit}>

        <input onInput={handleInput} value={st.name} name="name"  type="text" placeholder="Name" />
        <input onInput={handleInput} value={st.value} name="email" type="email" placeholder="Email" />
        <input onInput={handleInput} value={st.age} type="number" name="age" placeholder="Age" />
        <button className="submitbtn" type="submit">Submit</button>

      </form>
    </div>

  )
}

export default Form
