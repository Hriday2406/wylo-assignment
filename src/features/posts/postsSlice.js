import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  // [{ id: 1, image: "", text: "" }]
  reducers: {
    addPost: (state, action) => {
      state.posts.push({
        id: state.posts.length + 1,
        image: action.payload.image,
        text: action.payload.text,
      });
    },
    editPost: (state, action) => {
      state.posts.forEach((post) => {
        if (post.id === action.payload.id) {
          post.image =
            action.payload.image == null ? post.image : action.payload.image;
          post.text =
            action.payload.text == "" ? post.text : action.payload.text;
        }
      });
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
