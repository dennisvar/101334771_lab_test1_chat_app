import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:4000/api/users/login").then((res) => {
      if (res.data) {
        if (res.data.username === username) {
          if (res.data.password === password) {
            console.log("Login Successful");
            navigate("/menu");
          } else {
            console.log("Incorrect Password");
          }
        } else {
          console.log("User not found");
        }
      } else {
        console.log("Account not found");
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
