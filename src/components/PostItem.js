import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4">
      {post.title}
    </div>
  );
};

export default PostItem;
