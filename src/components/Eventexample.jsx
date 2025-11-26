// src/components/EventExample.jsx

function EventExample() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div style={styles.card}>
      <h2>Event Handling Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default EventExample;
