import { useEffect, useState } from "react";

const emptyForm = { name: "", email: "", course: "", age: "" };

export default function StudentForm({ initialValues, onSubmit, submitLabel }) {
  const [form, setForm] = useState(initialValues ?? emptyForm);

  useEffect(() => {
    setForm(initialValues ?? emptyForm);
  }, [initialValues]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      name: form.name.trim(),
      email: form.email.trim(),
      course: form.course.trim(),
      age: form.age
    });
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" value={form.name} onChange={handleChange}
          placeholder="Enter student name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" value={form.email}
          onChange={handleChange} placeholder="student@example.com" required />
      </label>
      <label>
        Course
        <input name="course" value={form.course} onChange={handleChange}
          placeholder="e.g. Computer Science" required />
      </label>
      <label>
        Age
        <input name="age" type="number" min="1" max="120" value={form.age}
          onChange={handleChange} placeholder="Enter age" required />
      </label>
      <div className="form-actions">
        <button className="button primary" type="submit">{submitLabel}</button>
      </div>
    </form>
  );
}
