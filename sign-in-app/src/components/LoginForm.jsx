import { useState } from "react";

import "../styles/App.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple hardcoded auth (replace later)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/dashboard";
    } else {
      setError("Invalid login details");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className='flex flex-row gap-1'>
        <label className='bg-blue-200 text-black w-30'>Username</label>
        <input
          className='border-2 border-black w-60'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className='flex flex-row gap-1'>
        <label className='bg-blue-200 text-black w-30'>Password</label>
        <input
          className='border-2 border-black w-60'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type='submit'>Login</button>
    </form>
  );
}

export default LoginForm;
