import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddStudents from './pages/AddStudents'
import Details from './pages/Details'
import { StudentProvider } from './context/StudentContext'

const App = () => (
  <StudentProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddStudents" element={<AddStudents />} />
      <Route path="/ListStudents" element={<Details />} />
    </Routes>
  </StudentProvider>
)
export default App