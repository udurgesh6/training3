import React from "react";

const Blog = (props) => {
  console.log(props);
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
      key={props.blog.blog_id}
    >
      <p>Blog Name - {props.blog.blog_name}</p>
      <p>Blog Id - {props.blog.blog_id}</p>
      <p>Blog Description - {props.blog.blog_description}</p>
    </div>
  );
};

export default Blog;
