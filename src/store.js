import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
