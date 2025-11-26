// src/components/EffectExample.jsx

import { useEffect, useState } from "react";

function EffectExample() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div style={styles.card}>
      <h2>useEffect Example</h2>
      <p>Current Time: {time}</p>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default EffectExample;
