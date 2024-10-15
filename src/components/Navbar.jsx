import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // React Router hook
import "../componentStyles/Navbar.css"; // Import CSS for styling

export default function Navbar() {
  const username = sessionStorage.getItem("username");

  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    // Here, you can clear any user data or tokens if necessary
    // localStorage.removeItem('userToken'); // Example of clearing a token
    navigate("/"); // Redirect to the signup page
  };

  return (
    <>
      <nav>
        {username}
        <NavLink to="/home"> News feed </NavLink>
        <NavLink to="/openNewPost"> New post </NavLink>
        <NavLink to="/openProfile"> My profile </NavLink>
        <NavLink to="/openEditProfile"> Edit profile </NavLink>
        <button onClick={handleLogout}>LOGOUT</button>
      </nav>
    </>
  );
}
