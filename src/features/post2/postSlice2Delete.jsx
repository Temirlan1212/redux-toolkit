import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts2: [],
};

export const getPosts22 = (id) =>
  createAsyncThunk(
    "posts2/getPosts",
    async (_, { rejectWithValue, dispatch }) => {
      const res = await axios.delete(`"http://localhost:8000/products"/${id}`);

      dispatch(removeTodo2(res.data));
    }
  );

export const postSlice2 = createSlice({
  name: "posts2",
  initialState,
  reducers: {
    removeTodo2: (state, action) => {
      state.posts2 = action.payload;
    },
  },
  extraReducers: {
    [getPosts22.fulfilled]: () => console.log("fullfiled"),
    [getPosts22.pending]: () => console.log("pending"),
    [getPosts22.rejected]: () => console.log("rejected"),
  },
});

export const { setPosts2, removeTodo2 } = postSlice2.actions;

export default postSlice2.reducer;
