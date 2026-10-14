import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm.jsx";

export default function AddStudent({ students = [], onAddStudent, onUpdateStudent }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const student = isEditing ? students.find((item) => item.id === id) : null;

  useEffect(() => {
    if (isEditing && students.length > 0 && !student) {
      navigate("/students", { replace: true });
    }
  }, [isEditing, students, student, navigate]);

  if (isEditing && !student) {
    return <p className="muted">Loading student details…</p>;
  }

  function handleSubmit(values) {
    if (isEditing) {
      onUpdateStudent(id, values);
    } else {
      onAddStudent(values);
    }
    navigate("/students");
  }

  return (
    <section className="form-page">
      <h1>{isEditing ? "Edit student" : "Add student"}</h1>
      <p className="muted">
        {isEditing ? "Update the student's information." : "Enter the student's details below."}
      </p>
      <StudentForm
        initialValues={student ?? undefined}
        onSubmit={handleSubmit}
        submitLabel={isEditing ? "Save changes" : "Add student"}
      />
    </section>
  );
}
