import React from "react";
import { useGetBlogApiQuery } from "../services/blogApi";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data } = useGetBlogApiQuery();
  return (
    <div className=" flex justify-center flex-col gap-5">
      <div className="">
        <Link to={'/create'}>
          <button className=" py-1 px-2 bg-blue-400 rounded">
            Create Blog
          </button>
        </Link>
      </div>
      {data?.map((item) => {
        return <BlogCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Blogs;
