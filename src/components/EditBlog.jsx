import { useNavigate, useParams } from "react-router-dom";
import {
  useEditBlogOfUserMutation,
  useGetBlogByIdQuery,
} from "../features/blogApi";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import convertToBase64 from "../helper/convertor";
import ReactQuill from "react-quill";
// import { ErrorMessage, Field, Form, Formik } from "formik";
import { baseUrl } from "../features/constant";
import { isString } from "formik";
import toast from "react-hot-toast";

function EditBlog() {
  const params = useParams();
  const [image, setImage] = useState();
  const [imageFile, setImageFile] = useState();
  const [description, setDescription] = useState();
  const [editBlog] = useEditBlogOfUserMutation();
  const navigate = useNavigate();

  console.log(params.id);
  const { data, error, isLoading, isSuccess } = useGetBlogByIdQuery({
    id: params.id,
  });
  const [blog, setBlog] = useState({});

  console.log("Edit ko data", data);

  console.log("loading issssssss", isLoading);
  //get user token
  const token = localStorage.getItem("token");

  console.log(data);
  console.log(error);

  console.log(isSuccess);

  useEffect(() => {
    if (data) {
      console.log("yeta vitra data", data);
      setBlog(data);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error, isLoading]);
  console.log("blog haii", blog);

  console.log("imageeeeeeeeeee haiiiiiiii", image);
  console.log("blog  koooooo imageeeeeeeeeee haiiiiiiii", blog?.image);
  //for submittin g form
  async function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData();

    fd.append("title", blog.title || "");
    fd.append("category", blog.category || "");
    fd.append("description", blog.description || "");
    fd.append("image", imageFile || "");
    console.log(...fd);
    const res = await editBlog({
      id: params.id,
      token,
      body: fd,
    });

    //get user deatail
    // const userJSON = localStorage.getItem("user");
    // const userDetail = JSON.parse(userJSON);
    if (res) {
      toast.success("Edited successfully");
      navigate(`/blogs`);
    }

    console.log(data);
    console.log(isLoading);
    console.log(isSuccess);
    console.log("Formik ko value hai");
    console.log("Form submit haii", blog);
    console.log(description);

    // console.log("clicked");
  }

  //handle change
  function handleChange(e) {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }

  console.log("image hai", blog?.image);

  //image
  async function imageUpload(e) {
    e.preventDefault();
    setImageFile(e.target.files[0]);
    console.log(e.target.files[0].name);
    setBlog({ ...blog, image: e.target.files[0].name });
    const base64 = await convertToBase64(e.target.files[0]);
    setImage(base64);
    console.log(base64);
  }
  return (
    <section className=" pt-[150px]">
      <div>
        <div>
          <h2 className=" mb-12 text-5xl text-myBlue underline underline-offset-8 capitalize font-semibold text-center">
            edit your Blog
          </h2>
        </div>

        <form
          action="#"
          onSubmit={(e) => handleSubmit(e)}
          className=" flex flex-col"
        >
          <div
            id="1st group"
            className=" flex flex-col md:flex-row gap-4 items-center h-32 "
          >
            <div className="w-full md:w-1/2 flex flex-col justify-between ">
              <label
                htmlFor="name"
                className=" text-xl font-semibold leading-10 text-myBlue"
              >
                Title
              </label>
              <div className="">
                <input
                  value={blog?.title}
                  onChange={(e) => handleChange(e)}
                  name="title"
                  type="text"
                  className="  pl-2 block w-full rounded-md border-0 py-2 focus:outline-none text-myBlue shadow-sm ring-1 ring-inset ring-gray-200 bg-myWhite  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-myBlue sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between h-32 items-start">
              <label
                htmlFor="WaterSupply"
                className=" text-xl font-semibold leading-10 text-myBlue"
              >
                Category
              </label>
              <select
                value={blog?.category}
                onChange={(e) => handleChange(e)}
                // as="select"
                name="category"
                className="block py-2 px-2  w-full text-sm text-myBlue bg-myWhite rounded-md border-0 border-b-2 border-gray-200  cursor-pointer focus:outline-none focus:ring-0 focus:border-myBlue "
              >
                <option value="business">Business</option>
                <option value="tourism">Tourism</option>
                <option value="healthCare">Health-Care</option>
                <option value="economy">Economy</option>
                <option value="politics">Politics</option>
                <option value="motivation">Motivation</option>
                <option value="educational">Educational</option>
                <option value="religion">Religion</option>
              </select>
            </div>
          </div>
          <div className=" flex flex-col items-center mt-20  md:mt-8">
            <input
              type="file"
              id="myinput"
              accept="image/*"
              onChange={(e) => imageUpload(e)}
            />
            {!image && (
              <img
                id="initial_image"
                alt="photo"
                className=" h-60 w-96 rounded-md object-cover"
                src={`${baseUrl}/${data?.image}`}
              />
            )}

            {image && (
              <img
                // key={image}
                className=" h-80 w-96 rounded-md object-cover"
                alt="pp"
                src={image}
              />
            )}
            <button
              className=" mt-2 text-xs font-bold bg-darkBg px-4 py-2 rounded-md text-slate-300"
              onClick={() => document.querySelector("#myinput").click()}
            >
              Add Image
            </button>
            <small className=" leading-8 text-red-700">
              *You must provide a image
            </small>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2  outline-none border-none">
              <ReactQuill
                className="  h-96  text-myBlue bg-myWhite rounded-md  "
                placeholder="enter blog description...."
                theme="snow"
                onChange={(value) => {
                  setBlog({ ...blog, description: value });
                }}
                value={blog?.description}
              />
            </div>
          </div>
          <div className="flex items-center justify-center py-14">
            <button
              type="submit"
              className="flex  shadow-md max-w-[400px] justify-center  bg-darkBg  rounded-md px-4 py-2 text-sm font-semibold leading-8  text-myWhite"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditBlog;
