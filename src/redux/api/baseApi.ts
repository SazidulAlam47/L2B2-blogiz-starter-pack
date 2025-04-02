import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
    endpoints: (build) => ({
        getAllBlogs: build.query({
            query: () => "/blogs",
        }),
    }),
});

export const { useGetAllBlogsQuery } = baseApi;
