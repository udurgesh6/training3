import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const blogDetails = [
    {
      blog_name: "React useState Blog",
      blog_id: 1,
      blog_description: "This is related to React UseState hook",
    },
    {
      blog_name: "React useEffect Blog",
      blog_id: 2,
      blog_description: "This is related to React useEffect hook",
    },
    {
      blog_name: "React useContext Blog",
      blog_id: 3,
      blog_description: "This is related to React useContext hook",
    },
    {
      blog_name: "React useReducer Blog",
      blog_id: 4,
      blog_description: "This is related to React useReducer hook",
    },
  ];
  return (
    <div>
      <h2>This is my Blogs Component</h2>
      <p>Here are my blogs</p>

      {blogDetails.map((ele) => (
        <Blog blog={ele} key={ele.blog_id} />
      ))}
    </div>
  );
};

export default Blogs;
