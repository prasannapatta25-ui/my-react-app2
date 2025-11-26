// src/components/StylingExample.jsx

function StylingExample() {
  return (
    <div style={styles.card}>
      <h2 style={{ color: "blue" }}>Styling Example</h2>
      <p style={{ background: "yellow", padding: 8 }}>Inline Styling</p>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default StylingExample;
