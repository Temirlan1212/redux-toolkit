import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleCompletedTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center my-2">
      <div
        onClick={() => dispatch(toggleCompletedTodo(todo.id))}
        className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400"
      >
        Complete
      </div>
      <div
        className={`text-sm ${
          todo.completed ? "line-through font-medium text-lime-400" : ""
        }`}
      >
        {todo.text}
      </div>
      <div
        className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Delete
      </div>
    </div>
  );
};

export default TodoItem;
