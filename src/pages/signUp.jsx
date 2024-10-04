import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.post("http://localhost:8080/signUp", {
      username,
      email,
      password,
      dob,
      gender,
    });
    console.log({ resp });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Registeration</h2>
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

        <label htmlFor="email">EMAIL: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
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

        <label htmlFor="dob">DOB: </label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={dob}
          onChange={(event) => {
            setDob(event.target.value);
          }}
        />
        <br />
        <br />

        <label>GENDER: </label>
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          value="M"
          id="gender-m"
          checked={gender === "M"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="gender-m">Male</label>
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          value="F"
          id="gender-f"
          checked={gender === "F"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="gender-f">Female</label>
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          value="O"
          id="gender-o"
          checked={gender === "O"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="gender-o">Other</label>
        <br />
        <br />

        <input type="submit" value="SUBMIT" />
        <br />
        <br />
        <br />
        <br />
        <NavLink to="/">Already have an account? Login instead</NavLink>
      </form>
      {/* <footer>
        <p>
          &copy; 2024 Tune Trove Music Streaming App | Design and Development.
          All Rights Reserved.
        </p>
      </footer> */}
    </div>
  );
}
