import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./constant";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (query) => ({
        url: "/api/login",
        method: "POST",
        body: query,
      }),
    }),

    userRegister: builder.mutation({
      query: (query) => ({
        url: "/api/signup",
        method: "POST",
        body: query,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = userApi;
