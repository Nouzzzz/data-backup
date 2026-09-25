
import { useState } from 'react'
const Editform = ({editmode,setEditmode}) => {

    const [user,setUser] = useState({
        name:"",
        email:"",
        age:"",
        phone:"",
      })


       const handleInput = (e) => {
    const {name,value} = e.target
    setUser((prev) => ({...prev,[name]:value}))
  }


  return (
    <div>
        <form action="">
        <input onInput={handleInput} value={user.name} name="name"  type="text" placeholder="name" />
        <input onInput={handleInput} value={user.value} name="email" type="email" placeholder="email" />
        <input onInput={handleInput} value={user.age} type="number" name="age" placeholder="age" />
        <input onInput={handleInput} value={user.phone} type="number" name="phone" placeholder="phone" />

        <button className="submitbtn" type="submit">update</button>
        <button onClick={() => {
            setEditmode({...editmode,editmode:false})
        }}>cancel</button>
        </form>
      
    </div>
  )
}

export default Editform
