import React, { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

import "bootstrap/dist/css/bootstrap.min.css";

const divStyle = {
  width: "50%",
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const onFormSubmit = (event) => {
    const name = event.target[0].value;
    const content = event.target[1].value;
    const obj = { name: name, content: content, id: Math.random() };
    setBlogs([...blogs, obj]);
  };

  const onDelete = (id) => {
    console.log("given id : ", id);
    const data = blogs.filter((value, index) => value.id !== id);
    setBlogs([...data]);
  };

  return (
    <div className=" container-fluid bg-light p-5" style={divStyle}>
      <BlogForm onFormSubmit={onFormSubmit} />
      <br />
      <BlogList blogs={blogs} deleteHandle={onDelete} />
    </div>
  );
};

export default Blog;
