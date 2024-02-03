import { useState } from "react";
import mysvg from "../assets/random.svg";
import convertToBase64 from "../helper/convertor";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreateBlogMutation } from "../features/blogApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../features/constant";

function CreateBlog() {
  const [image, setImage] = useState();
  const [imageFile, setImageFile] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const [createBlog, { data, error, isSuccess }] = useCreateBlogMutation();
  const initialValues = {
    title: "",
    category: "business",
  };
  const formSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, "Too Short")
      .max(200, "Too Long!")
      .required("*title required"),
    category: Yup.string().required("*category required"),
  });

  async function handleSubmit(values) {
    // values = await Object.assign(values, {
    //   image: image || "",
    //   description: description,
    // });

    const fd = new FormData();
    fd.append("title", values.title);
    fd.append("category", values.category);
    fd.append("description", description);
    fd.append("image", imageFile || "");
    console.log(...fd);
    console.log(values);
    const token = localStorage.getItem("token");
    console.log("my token", token);
    const res = await createBlog({ body: fd, token: token });
    console.log(res);

    console.log("clicked");
  }

  async function imageUpload(e) {
    e.preventDefault();
    setImageFile(e.target.files[0]);
    const base64 = await convertToBase64(e.target.files[0]);
    setImage(base64);
    console.log(base64);
  }

  console.log(isSuccess);
  console.log(error);
  if (isSuccess) {
    toast.success("Created Successfully");
    navigate("/");
  }

  return (
    <section className=" pt-[150px]">
      <div>
        <div>
          <h2>Create your Blog</h2>
        </div>
        <Formik
          validationSchema={formSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className=" flex flex-col">
            <div id="1st group" className=" flex gap-4 items-center h-32 ">
              <div className=" w-1/2 flex flex-col justify-between ">
                <label
                  htmlFor="name"
                  className=" text-xl font-semibold leading-10 text-myBlue"
                >
                  Title
                </label>
                <div className="">
                  <Field
                    name="title"
                    type="text"
                    className=" pl-2 block w-full rounded-md border-0 py-2 focus:outline-none text-myBlue shadow-sm ring-1 ring-inset ring-gray-200 bg-myWhite  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-myBlue sm:text-sm sm:leading-6"
                  />
                </div>
                <p className=" text-xs text-pink-800">
                  <ErrorMessage
                    className="   text-xs text-pink-800"
                    name="title"
                  />
                </p>{" "}
              </div>
              <div className="w-1/2 flex flex-col justify-between h-32 items-start">
                <label
                  htmlFor="WaterSupply"
                  className=" text-xl font-semibold leading-10 text-myBlue"
                >
                  Category
                </label>
                <Field
                  as="select"
                  name="category"
                  className="block py-2 px-2  w-full text-sm text-myBlue bg-myWhite rounded-md border-0 border-b-2 border-gray-200  cursor-pointer focus:outline-none focus:ring-0 focus:border-myBlue "
                  placeholder="Select a Category"
                >
                  <option defaultValue={"business"} value="business">
                    Business
                  </option>
                  <option value="tourism">Tourism</option>
                  <option value="healthCare">Health-Care</option>
                  <option value="economy">Economy</option>
                  <option value="politics">Politics</option>
                  <option value="motivation">Motivation</option>
                  <option value="educational">Educational</option>
                  <option value="religion">Religion</option>
                </Field>
                <p className=" text-xs text-pink-800">
                  <ErrorMessage
                    className="   text-xs text-pink-800"
                    name="category"
                  />
                </p>{" "}
              </div>
            </div>
            <div className=" flex flex-col items-center  mt-8">
              <input
                type="file"
                id="myinput"
                accept="image/*"
                required
                onChange={(e) => imageUpload(e)}
              />
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
                {/* <textarea
                  onChange={(e) =>
                    setJobData({ ...jobData, description: e.target.value })
                  }
                  value={jobData.description}
                  name="description"
                  type="text"
                  className=" pl-2 block w-full rounded-md border-0 py-1.5 ring-gray-400 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-1 focus:outline-none  focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                /> */}
                <ReactQuill
                  className="  h-96  text-myBlue bg-myWhite rounded-md  "
                  placeholder="enter blog description...."
                  theme="snow"
                  onChange={(value) => {
                    setDescription(value);
                  }}
                  value={description}
                />
              </div>
            </div>
            <div className="flex items-center justify-center py-14">
              <button
                type="submit"
                className="flex  shadow-md max-w-[400px] justify-center  bg-darkBg  rounded-md px-4 py-2 text-sm font-semibold leading-8  text-myWhite"
              >
                Create
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default CreateBlog;
