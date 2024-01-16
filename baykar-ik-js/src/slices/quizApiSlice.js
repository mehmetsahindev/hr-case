import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const quizApiSlice = createApi({
  baseQuery,
  tagTypes: ["Questions"],
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => ({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: "GET",
      }),
      keepUnusedDataFor: 1,
      providesTags: ["Questions"],
      transformResponse: (results) => {
        const randomIndices = Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * results.length)
        );

        const randomQuestions = randomIndices.map((index) => results[index]);

        let formattedQuestions = randomQuestions.map((question) => {
          const title = question.body;
          const options = ["Option A", "Option B", "Option C", "Option D"];

          return { title, options };
        });

        return formattedQuestions;
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = quizApiSlice;
