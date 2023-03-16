import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["books", "book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      keepUnusedDataFor: 600,
      providesTags: ["books"],
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, arg) => [{ type: "book", id: arg }],
    }),

    addbook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    upadateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "book", id: arg.id },
        "books",
      ],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        "books",
        { type: "book", id: arg },
      ],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddbookMutation,
  useGetBookQuery,
  useUpadateBookMutation,
  useDeleteBookMutation,
} = apiSlice;
