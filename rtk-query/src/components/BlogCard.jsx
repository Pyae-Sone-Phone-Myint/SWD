import React from "react";

const BlogCard = (props) => {
  const { title, id } = props;
  return (
    <div className=" flex  items-center justify-between shadow p-5 w-96">
      <h1>{title}</h1>
      <div className="flex gap-3">
        <button className=" py-1 px-2 bg-blue-400 rounded">Detail</button>
        <button className=" py-1 px-2 bg-red-400 rounded">Delete</button>
      </div>
    </div>
  );
};

export default BlogCard;
