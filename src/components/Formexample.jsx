// src/components/FormExample.jsx

import { useState } from "react";

function FormExample() {
  const [data, setData] = useState({ name: "", email: "" });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${data.name} - ${data.email}`);
  }

  return (
    <div style={styles.card}>
      <h2>Form Example</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Enter Name" onChange={handleChange} />
        <br />
        <input name="email" placeholder="Enter Email" onChange={handleChange} />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default FormExample;
