import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
};

console.log(initialState.todos);

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("http://localhost:8000/products");
    dispatch(getTodo(res.data));
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      axios.post("http://localhost:8000/products", action.payload);
    },

    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo, getTodo } = todoSlice.actions;
export const { toggleCompletedTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
