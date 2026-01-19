import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        <label>Username:</label>
        <input type="text" />

        <label>Password:</label>
        <input type="password" />

        <button>Sign In</button>

        <p>
          New user? <Link to="/">Register</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f4c400",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#8b6b00",
    padding: 30,
    borderRadius: 20,
    width: 300,
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};
