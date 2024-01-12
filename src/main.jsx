import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import CreateBlog from "./components/CreateBlog.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className=" shadow-md shadow-green-500   fixed  w-full top-0 left-0 right-0 z-40">
        <Navbar />
      </div>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);