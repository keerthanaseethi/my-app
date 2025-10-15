import React, { useState } from "react";

export default function JobForm() {
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs = {};
    if (!form.name) errs.name = "Name required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) errs.email = "Invalid email";
    if (!form.role) errs.role = "Select a role";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(errs);
    }
  };

  return (
    <div>
      <h2>Job Application</h2>
      {submitted ? (
        <p>Form Submitted Successfully ✅</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <p style={{ color: "red" }}>{errors.name}</p>

          <input name="email" placeholder="Email" onChange={handleChange} />
          <p style={{ color: "red" }}>{errors.email}</p>

          <select name="role" onChange={handleChange}>
            <option value="">--Select Role--</option>
            <option value="Frontend">Frontend Developer</option>
            <option value="Backend">Backend Developer</option>
          </select>
          <p style={{ color: "red" }}>{errors.role}</p>

          <button type="submit">Apply</button>
        </form>
      )}
    </div>
  );
}
