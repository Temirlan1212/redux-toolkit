import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts2,
  getPosts22,
  removeTodo2,
} from "../features/post2/postSlice2";
import { removeTodo } from "../features/todo/todoSlice";

const Posts2 = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.post2.posts2);

  useEffect(() => {
    getPosts2();
  }, []);

  return (
    <div>
      <div>
        <button type="submit" onChange={dispatch(getPosts2())}></button>

        {posts?.map((post) => (
          <>
            <li>{post.text}</li>

            <button type="submit" onClick={dispatch(getPosts22(post.id))}>
              delete
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Posts2;
