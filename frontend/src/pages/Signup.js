import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/api/users/signup", {
        username,
        password,
        firstname,
        lastname,
        email,
      })
      .then((res) => {
        if (!res.data) {
          console.log("Signup Successful");
          navigate("/login");
        } else {
          console.log("Account not found");
          setEmail("");
          setPassword("");
          setFirstname("");
          setLastname("");
          setEmail("");
        }
      });
  };
  return (
    <div>
      <h1>Signup</h1>
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
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit" value="submit" onClick={() => handleSubmit()}>
          Signup
        </button>
      </form>
    </div>
  );
}
