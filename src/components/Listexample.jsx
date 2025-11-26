// src/components/ListExample.jsx

function ListExample() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div style={styles.card}>
      <h2>List & Keys Example</h2>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default ListExample;
