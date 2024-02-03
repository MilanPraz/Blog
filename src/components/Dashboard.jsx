import { FaRegEdit } from "react-icons/fa";
import { baseUrl } from "../features/constant";
import { useEffect, useMemo, useRef, useState } from "react";
import "../App.css";
import {
  useDeleteBlogOfUserMutation,
  useGetBlogOfUserQuery,
} from "../features/blogApi";
import SearchCard from "./sub/SearchCard";
import { Link, useNavigate } from "react-router-dom";
import MyCard from "./sub/MyCard";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

function Dashboard() {
  const [picture, setPicture] = useState(null);
  const [changeimg, setChangeimg] = useState(false);
  const [changeinput, setChangeinput] = useState(false);
  const [input, setInput] = useState("");
  const userJSON = localStorage.getItem("user");
  const userToken = localStorage.getItem("token");
  const userDetail = JSON.parse(userJSON);

  console.log(userToken);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [
    deleteBlog,
    { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },
  ] = useDeleteBlogOfUserMutation();
  // const [getBlogs] = useGetBlogOfUserQuery();
  //user blogs
  // useEffect(() => {
  const { data, error, isSuccess, isLoading } =
    useGetBlogOfUserQuery(userToken);

  console.log(data);
  useEffect(() => {
    if (data) {
      setBlogs(data);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);
  // setBlogs(data);
  // }, []);

  // useEffect(() => {
  //   // Refetch data when navigating to the Dashboard page
  //   queryClient.prefetchQuery(["getBlogOfUser", userToken]);
  // }, [queryClient, userToken]);

  async function handleDelete(id) {
    try {
      console.log("parameter ko id", id);
      // alert(id);

      const { data, error, isSuccess } = await deleteBlog({
        id,
        token: userToken,
      });

      console.log(id);
      const UpdatedBlog = blogs.filter((blog) => {
        console.log(blog._id);
        return blog._id != id;
      });
      console.log("updated blos haii", UpdatedBlog);
      setBlogs(UpdatedBlog);
      // console.log(error);
      console.log(isSuccess);
      // console.log(data);
      toast.success("Successfully Deleted");
      // alert(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  function handlePictureChange() {
    console.log("picture changeed");
  }

  // console.log(data);
  // console.log(error);
  // console.log(isLoading);
  const inputref = useRef(null);
  return (
    <div className=" mt-24 flex  lg:flex-row flex-col gap-8">
      <section
        id="left_sidebar"
        className=" flex flex-col items-center justify-center border-b-2 pb-8 lg:border-r-2 px-8"
      >
        <h2 className=" leading-9 capitalize font-bold text-2xl text-myBlue">
          USER DETAIL
        </h2>
        <span className=" text-lg leading-8 flex items-center gap-2 mt-4">
          Username:{" "}
          <input
            onClick={() => setChangeinput(true)}
            onChange={(e) => setInput(e.target.value)}
            value={`${changeinput === true ? input : userDetail?.username}`}
            className=" bg-transparent border px-2 py-1  outline-none"
          />
        </span>
        <div className=" flex  flex-col items-center">
          {changeimg === false ? (
            <img
              alt="pp"
              className="w-60 h-60 rounded-full object-cover mt-4 border-4 border-myBlue"
              src={`${baseUrl}/${userDetail?.image}`}
            />
          ) : null}
          {picture ? (
            <img
              alt="pp"
              className="w-60 h-60 object-top  rounded-full object-cover mt-4 border-4 border-myBlue"
              src={URL.createObjectURL(picture)}
            />
          ) : null}

          <label
            onClick={() => {
              setChangeimg(true);
              inputref.current.click();
            }}
            className="change-btn text-sm  mt-4 cursor-pointer p-4 border-2 border-myBlue text-center rounded-lg border-dotted "
          >
            Change Profile Picture
          </label>
          <input
            onChange={(e) => setPicture(e.target.files[0])}
            ref={inputref}
            className=" bg-white"
            type="file"
            accept=".jpeg,.jpg,.png"
          />
          <button
            onClick={() => handlePictureChange()}
            className=" mt-4 rounded-md text-sm bg-myBlue p-2"
          >
            Submit
          </button>
        </div>
      </section>
      <section>
        <h2 className=" text-xl font-bold  text-myBlue mb-8">YOUR BLOGS</h2>
        <section className=" relative z-0 flex flex-col gap-8">
          {blogs &&
            blogs?.map((blog) => {
              return (
                <div
                  className=" relative cursor-pointer group group-hover:before::content-[''] hover:before:absolute  hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:bg-myBlue hover:before:opacity-50  hover:before:inset-0 hover:before:z-30   "
                  // onClick={() => navigate(`/blog/detail/${blog._id}`)}
                  key={blog._id}
                >
                  <div className=" hidden  gap-4 group-hover:flex cursor-pointer hover:text-myBlue  absolute z-40 top-2 right-2">
                    <RiDeleteBin6Line
                      onClick={() => handleDelete(blog._id)}
                      className=" text-white text-xl"
                    />
                    <Link to={`/blogs/edit/${blog._id}`}>
                      <MdOutlineModeEdit className=" text-white text-xl" />
                    </Link>
                  </div>
                  <MyCard blog={blog} />
                </div>
              );
            })}
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
