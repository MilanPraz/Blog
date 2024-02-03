import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import Blogs from "./components/Blogs";
import Dashboard from "./components/Dashboard";
import EditBlog from "./components/EditBlog";
import SingleBlog from "./components/SingleBlog";
import {
  useGetAllBlogsOnlyQuery,
  useGetAllBlogsQuery,
} from "./features/blogApi";

/* shadow-md shadow-green-500 fixed w-full top-0 left-0 right-0 z-10 */

function App() {
  const { data, error, isSuccess, isLoading } = useGetAllBlogsOnlyQuery();

  // console.log("app ko data", data);

  return (
    <main className="">
      {/* <Navbar /> */}
      <div className=" container mx-auto  px-9 lg:px-36">
        <Routes>
          <Route path="/" element={<Home blogs={data} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/edit/:id" element={<EditBlog />} />
          <Route path="/blogs/detail/:id" element={<SingleBlog />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/:username/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
