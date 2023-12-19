import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "";

const enterNameApi = createApi({
  reducerPath: "template/api",

  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: (headers) => {
    headers.append("ABC", "DEFG")
    return headers
  } }),

  endpoints: (builder) => ({
    someQuery: builder.query({
      query: () => "someQuery",
    }),
  }),
});


