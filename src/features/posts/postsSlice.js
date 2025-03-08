import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Field of lively Sunflower",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        text: "Clouds",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Tree",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1528155124528-06c125d81e89?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Aurora borealis",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1740121366529-1411e6a352b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Cup of Cappuccino",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1740162390227-0d945bc3407d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Pizza",
      },
    ],
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
