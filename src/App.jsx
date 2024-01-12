import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <main className=" container mx-auto">
      <div className=" shadow-md shadow-green-500   fixed  w-full top-0 left-0 right-0 z-40">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </main>
  );
}

export default App;
