import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Chat App</h1>
      <Link to={`/login`}>Login</Link>
      <Link to={`/signup`}>Register</Link>
    </div>
  );
}
