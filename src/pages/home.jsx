import React from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h2>Home</h2>
      <Posts />
    </div>
  );
}
