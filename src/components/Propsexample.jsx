// src/components/PropsExample.jsx

function PropsExample({ name, age }) {
  return (
    <div style={styles.card}>
      <h2>Props Example</h2>
      <p>Hello {name}, you are {age} years old.</p>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default PropsExample;
