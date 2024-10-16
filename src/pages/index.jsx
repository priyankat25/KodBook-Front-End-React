import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; //React Router hook
import "../componentStyles/Index.css";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //Hook to programmatically navigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.post("http://localhost:8080/login", {
      username,
      password,
    });
    if (resp.data === "valid") {
      // sessionStorage.setItem("username", username);
      navigate("/home");
      alert("Login successfully");
    } else {
      navigate("/");
      alert("Login not successfully, try again");
    }
    console.log({ resp });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="password">PASSWORD: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <br />

        <input type="submit" value="SUBMIT" />
        <br />
        <br />
        <br />
        <br />
        <NavLink to="/openSignUp">New user? Create account</NavLink>
      </form>
      <footer>
        <p>
          &copy; 2024 KodBook Social Media App | Design and Development. All
          Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
