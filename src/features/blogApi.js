import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./constant";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (query) => ({
        // console.log(query)
        url: "/api/createBlog",
        method: "POST",
        body: query.body,
        headers: {
          authorization: `bearer ${query.token}`,
        },
      }),
    }),
    getAllBlogsOnly: builder.query({
      query: (query) => ({
        url: "/api/getBlogs",
      }),
    }),
    getAllBlogs: builder.query({
      query: (query) => ({
        url: `/api/getBlogs${query}`,
      }),
    }),
    getBlogOfUser: builder.query({
      query: (query) => ({
        url: `/api/getUserBlogs`,
        method: "GET",
        headers: {
          authorization: `bearer ${query}`,
        },
      }),
    }),
    getBlogById: builder.query({
      query: (query) => ({
        url: `/api/getBlog/${query.id}`,
      }),
    }),
    deleteBlogOfUser: builder.mutation({
      query: (query) => ({
        url: `/api/deleteBlog/${query.id}`,
        method: "DELETE",
        headers: {
          authorization: `bearer ${query.token}`,
        },
      }),
    }),
    editBlogOfUser: builder.mutation({
      query: (query) => ({
        url: `/api/editBlog/${query.id}`,
        method: "PUT",
        body: query.body,
        headers: {
          authorization: `bearer ${query.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useGetAllBlogsOnlyQuery,
  useGetBlogByIdQuery,
  useGetBlogOfUserQuery,
  useDeleteBlogOfUserMutation,
  useEditBlogOfUserMutation,
} = blogApi;
