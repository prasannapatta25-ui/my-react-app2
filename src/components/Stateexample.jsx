// src/components/StateExample.jsx

import { useState } from "react";

function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.card}>
      <h2>State Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>

      <button style={{ marginLeft: 10 }} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default StateExample;
