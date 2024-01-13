import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./constant";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (query) => ({
        url: "/api/createBlog",
        method: "POST",
        body: query.body,
        headers: {
          authorization: query.token,
        },
      }),
    }),
  }),
});

export const { useCreateBlogMutation } = blogApi;
