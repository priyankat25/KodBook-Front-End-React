import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Index from "./pages";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";
import EditProfile from "./pages/editProfile";
import NewPost from "./pages/newPost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Index />} />
      <Route path="home" element={<Home />} />
      <Route path="openSignUp" element={<SignUp />} />
      <Route path="openNewPost" element={<NewPost />} />
      <Route path="openProfile" element={<Profile />} />
      <Route path="openEditProfile" element={<EditProfile />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
