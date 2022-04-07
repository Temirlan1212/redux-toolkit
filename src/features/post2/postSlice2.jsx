import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts2: [],
};

export const getPosts2 = createAsyncThunk(
  "posts2/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("http://localhost:8000/products");
    dispatch(setPosts2(res.data));
  }
);

export const getPosts22 = (id) =>
  createAsyncThunk(
    "posts2/getPosts",
    async (_, { rejectWithValue, dispatch }) => {
      const res = await axios.delete(`"http://localhost:8000/products"/${id}`);

      dispatch(setPosts2(res.data));
    }
  );

export const postSlice2 = createSlice({
  name: "posts2",
  initialState,
  reducers: {
    setPosts2: (state, action) => {
      state.posts2 = action.payload;
    },
  },
  extraReducers: {
    [getPosts2.fulfilled]: () => console.log("fullfiled"),
    [getPosts2.pending]: () => console.log("pending"),
    [getPosts2.rejected]: () => console.log("rejected"),
  },
});

export const { setPosts2 } = postSlice2.actions;

export default postSlice2.reducer;
