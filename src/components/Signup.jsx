import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useUserRegisterMutation } from "../features/userApi";
import toast from "react-hot-toast";

export default function Signup() {
  const [userRegister, { data, isLoading, error, isSuccess }] =
    useUserRegisterMutation();
  let initialvalues = {
    username: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("*Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    password: Yup.string()
      .matches(passwordRules, { message: "Please create a strong password" })
      .required("*Password is required"),
  });

  async function handleSubmit(values) {
    console.log("heloooooooooooo");
    // alert(JSON.stringify(values))
    const res = await userRegister(values).unwrap();
    console.log(res);
    // setSubmitting(false)
    console.log(values);
  }
  if (isSuccess) {
    navigate("/login");
    toast.success("Signup Successful");
  }
  if (error) {
    console.log(error);
    toast.error(error?.data?.msg);
  }

  return (
    <div className=" relative mt-20  overflow-hidden">
      <div
        id=""
        className=" w-[85px] h-[135px] absolute top-[294px] left-[279px]  rotate-2 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[85px] h-[135px] absolute top-[200px] left-[29px]  rotate-2 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[85px] h-[135px] absolute top-[54px] left-[540px]  rotate-12 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[85px] h-[135px] absolute top-[30px] left-[900px]  rotate-90 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[85px] h-[135px] absolute top-[200px] left-[900px]  rotate-90 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[85px] h-[135px] absolute top-[24px] left-[229px]  rotate-2 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[85px] h-[135px] absolute top-[144px] left-[600px]  rotate-2 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[85px] h-[135px] absolute top-[30px] left-[700px]  rotate-2 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[200px] h-[405px] absolute top-[30px] left-[70px]  rotate-45 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[200px] h-[405px] absolute top-[80px] left-[700px]  -rotate-45 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>
      <div
        id=""
        className=" w-[200px] h-[405px] absolute -top-[50px] left-[450px]  rotate-12 opacity-20 bg-slate-50 rounded-lg backdrop-blur-md border-[1px] border-slate-200 box-border"
      ></div>

      <div
        id="glassEffect"
        className=" md:w-[400px] mx-auto flex items-center justify-center flex-col gap-2  p-8 rounded-md drop-shadow-sm text-slate-950"
      >
        <h2 className="text-2xl text-center font-bold text-slate-100 ">
          Register Now!
        </h2>
        <p className="  text-sm font-light">Happy to join you!</p>

        <Formik
          validationSchema={LoginSchema}
          initialValues={initialvalues}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex flex-col gap-1 mb-2">
              <Field
                type="text"
                placeholder="username"
                name="username"
                className=" bg-slate-200  outline-none  px-4 py-3 rounded-md text-slate-950"
              />
              <p className=" text-xs text-pink-800">
                <ErrorMessage
                  className="   text-xs text-pink-800"
                  name="username"
                />
              </p>
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <Field
                type="text"
                placeholder="email"
                name="email"
                className=" bg-slate-200  outline-none  px-4 py-3 rounded-md text-slate-950"
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
                className=" bg-slate-200  outline-none  px-4 py-3 rounded-md text-slate-950"
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
              className=" bg-myBlue text-slate-200 w-full  rounded-md px-2 py-2 cursor-pointer"
            >
              Register
            </button>

            <p className=" text-lg mt-4 font-semibold text-slate-200">
              Have an account?
              <Link to={"/login"} className=" text-myBlue px-1">
                Login Here
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
