// src/components/CompositionExample.jsx

function Card({ children }) {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
}

function CompositionExample() {
  return (
    <div>
      <Card>
        <h3>Card Title</h3>
        <p>This content is passed through children props.</p>
      </Card>

      <Card>
        <button>Another Card Button</button>
      </Card>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default CompositionExample;
