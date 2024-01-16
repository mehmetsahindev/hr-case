import { configureStore } from "@reduxjs/toolkit";
import { quizApiSlice } from "./slices/quizApiSlice";

const store = configureStore({
  reducer: {
    [quizApiSlice.reducerPath]: quizApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApiSlice.middleware),
});

export default store;
