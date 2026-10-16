import { useContext } from 'react';
import Form from '../components/Form'
import { ThemeContext } from '../context/Themecontext'

function AddStudents({ addStudent }) {

  const {darkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={`min-h-screen p-3
     ${ darkMode ? "min-h-screen bg-black text-white"  : "min-h-screen bg-white text-black"  }`} >
      <h2 className="text-lg">Add Students</h2>
      <Form addStudent={addStudent} />
    </div>
  )
}

export default AddStudents
