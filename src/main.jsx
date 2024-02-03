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
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import { Toaster } from "react-hot-toast";
import Headroom from "react-headroom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      {/* <div className=" w-full shadow-md shadow-green-500  z-[500]"> */}
      <Headroom>
        <div className="  shadow-lg  px-8 shadow-green-500 z-[400]">
          <Navbar />
        </div>
      </Headroom>
      {/* </div> */}
      <Toaster />
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
