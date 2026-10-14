import { Link } from "react-router-dom";

export default function StudentList({ students, onDeleteStudent }) {
  function handleDelete(student) {
    const confirmed = window.confirm(`Delete ${student.name}? This cannot be undone.`);
    if (confirmed) onDeleteStudent(student.id);
  }

  return (
    <section>
      <div className="section-heading">
        <div>
          <h1>Students</h1>
          <p className="muted">{students.length} student{students.length === 1 ? "" : "s"} registered</p>
        </div>
        <Link className="button primary" to="/add-student">+ Add student</Link>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <h2>No students yet</h2>
          <p>Add your first student to see them listed here.</p>
          <Link className="button primary" to="/add-student">Add a student</Link>
        </div>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th><th>Email</th><th>Course</th><th>Age</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td><Link className="student-name" to={`/students/${student.id}`}>{student.name}</Link></td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>{student.age}</td>
                  <td>
                    <div className="actions">
                      <Link className="button small secondary" to={`/edit-student/${student.id}`}>Edit</Link>
                      <button className="button small danger" onClick={() => handleDelete(student)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
