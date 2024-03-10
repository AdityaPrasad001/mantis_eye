import { useState } from "react";
import Button from "./Button";
import { useAuth } from "./context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated, isError } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) login(username, password);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div>
        <Button onClick={handleSubmit}>Login</Button>
      </div>

      {isAuthenticated && <div style={{ color: "green" }}>Login Sucessful</div>}

      {isError && (
        <div style={{ color: red }}>Invalid username or password</div>
      )}
    </form>
  );
};

export default Login;
