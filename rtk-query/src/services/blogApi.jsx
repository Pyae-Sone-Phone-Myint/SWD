import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getBlogApi: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetBlogApiQuery } = blogApi;
