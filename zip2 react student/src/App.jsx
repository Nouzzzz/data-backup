import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import StudentList from "./pages/StudentList.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";

const STORAGE_KEY = "student-manager-students";

export default function App() {
  const [students, setStudents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  function addStudent(student) {
    const newStudent = { ...student, id: crypto.randomUUID() };
    setStudents((current) => [...current, newStudent]);
  }

  function updateStudent(id, updatedStudent) {
    setStudents((current) =>
      current.map((student) =>
        student.id === id ? { ...student, ...updatedStudent } : student
      )
    );
  }

  function deleteStudent(id) {
    setStudents((current) => current.filter((student) => student.id !== id));
  }

  return (
    <>
      <Navbar />
      <main className="page-container">
        <Routes>
          {/* The homepage is intentionally empty. */}
          <Route path="/" element={<Home />} />
          <Route
            path="/add-student"
            element={<AddStudent onAddStudent={addStudent} />}
          />
          <Route
            path="/edit-student/:id"
            element={
              <AddStudent students={students} onUpdateStudent={updateStudent} />
            }
          />
          <Route
            path="/students"
            element={
              <StudentList students={students} onDeleteStudent={deleteStudent} />
            }
          />
          <Route
            path="/students/:id"
            element={<StudentDetails students={students} />}
          />
          <Route path="*" element={<p className="not-found">Page not found.</p>} />
        </Routes>
      </main>
    </>
  );
}
