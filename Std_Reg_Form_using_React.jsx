import React, { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, age } = formData;
    if (!name || !email || isNaN(age) || age < 5 || age > 100) {
      alert("Please enter valid details.");
    } else {
      alert("Student registered successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" type="number" />
      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;