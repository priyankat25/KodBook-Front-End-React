import React from "react";
import { NavLink } from "react-router-dom";

export default function Logout() {
  return (
    <div>
      <NavLink to="/openSignUp">New user? Create account</NavLink>
    </div>
  );
}
