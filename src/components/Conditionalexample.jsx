// src/components/ConditionalExample.jsx

import { useState } from "react";

function ConditionalExample() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={styles.card}>
      <h2>Conditional Rendering</h2>

      {loggedIn ? <p>Welcome, User!</p> : <p>Please Login</p>}

      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

const styles = { card: { padding: 16, background: "white", marginBottom: 10, borderRadius: 8 } };

export default ConditionalExample;
