import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        text: "Clouds",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Sunflower Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi est rerum dolore dignissimos, ab modi quia eveniet sapiente mollitia ex, aut voluptatibus consequuntur veniam veritatis.",
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
