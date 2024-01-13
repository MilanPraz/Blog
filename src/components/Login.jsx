import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../features/userApi";
import toast from "react-hot-toast";

export default function Login() {
  let initialvalues = {
    email: "",
    password: "",
  };
  const [userLogin, { isLoading, data, error, isSuccess }] =
    useUserLoginMutation();
  const navigate = useNavigate();
  // console.log(isLoading);
  console.log(data);
  // console.log(isSuccess);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    password: Yup.string().required("*Password is required"),
  });

  async function handleSubmit(values) {
    console.log("heloooooooooooo");
    console.log("inside handle", isSuccess);
    // alert(JSON.stringify(values));
    const res = await userLogin(values).unwrap();
    console.log(res);
    // setSubmitting(false)
    console.log(values);
  }
  if (isSuccess) {
    localStorage.setItem("token", data.token);
    navigate("/");
    toast.success("Login Success");
  }
  if (error) {
    console.log(error);
    // toast.error(error.data.msg);
  }

  return (
    <div>
      <div className=" flex items-center justify-center flex-col gap-2 bg-slate-200 p-8 rounded-md drop-shadow-sm text-slate-950">
        <h2 className=" text-xl font-bold ">Hello Again!</h2>
        <p className=" text-sm font-light">
          Exploring More by
          <br /> connecting with us
        </p>

        <Formik
          validationSchema={LoginSchema}
          initialValues={initialvalues}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex flex-col gap-1 mb-2">
              <Field
                type="text"
                placeholder="email"
                name="email"
                className=" bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950"
              />
              <p className=" text-xs text-pink-800">
                <ErrorMessage
                  className="   text-xs text-pink-800"
                  name="email"
                />
              </p>
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <Field
                type="text"
                placeholder="password"
                name="password"
                className=" bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950"
              />
              <p className=" text-xs text-pink-800">
                <ErrorMessage
                  className="   text-xs text-pink-800"
                  name="password"
                />
              </p>
            </div>

            {/* <input placeholder='Username here'  className=' bg-slate-200  outline-none border-purple-600 border-2 px-2 py-1 rounded-md text-slate-950' /> */}
            <button
              type="submit"
              className=" w-full bg-purple-700 rounded-md px-2 py-1"
            >
              Let&apos;s Go
            </button>

            <p className=" text-xs font-semibold">
              Not a Member{" "}
              <Link to={"/register"} className=" text-red-700">
                Register Now
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
