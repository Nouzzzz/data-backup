import { Link, useParams } from "react-router-dom";

export default function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((item) => item.id === id);

  if (!student) {
    return (
      <section>
        <h1>Student not found</h1>
        <Link to="/students">Back to students</Link>
      </section>
    );
  }

  return (
    <section className="details-card">
      <div className="section-heading">
        <div>
          <h1>{student.name}</h1>
          <p className="muted">Student details</p>
        </div>
        <Link className="button secondary" to="/students">Back to list</Link>
      </div>
      <dl className="details-list">
        <div><dt>Email</dt><dd>{student.email}</dd></div>
        <div><dt>Course</dt><dd>{student.course}</dd></div>
        <div><dt>Age</dt><dd>{student.age}</dd></div>
      </dl>
      <Link className="button primary" to={`/edit-student/${student.id}`}>Edit student</Link>
    </section>
  );
}
