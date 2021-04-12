import React, { useState, useEffect } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

import "bootstrap/dist/css/bootstrap.min.css";

const divStyle = {
  width: "50%",
};

const Blog = () => {
  console.log("Blog component called");
  const [blogs, setBlogs] = useState([
    {
      id: Math.random(),
      name: "Sourav Ganguly",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, nisi!",
    },
    {
      id: Math.random(),
      name: "Gourab Ganguly",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, nisi!",
    },
  ]);

  const [myHobby, setMyHobby] = useState("Coding");

  useEffect(() => {
    console.log("use effect called");
    console.log(blogs);
  }, [myHobby]);

  const onFormSubmit = (event) => {
    const name = event.target[0].value;
    const content = event.target[1].value;
    const obj = { name: name, content: content, id: Math.random() };
    setBlogs([...blogs, obj]);
  };

  const onDelete = (id) => {
    const data = blogs.filter((value) => value.id !== id);
    setBlogs([...data]);
  };

  return (
    <div className=" container-fluid bg-light p-5" style={divStyle}>
      <div className="bg-info text-light">
        <h2 className="display-5 p-3">
          My hobby :{" "}
          <span className="font-weight-bold text-warning"> {myHobby}</span>
        </h2>
        <button
          className="btn btn-warning m-1"
          onClick={() => setMyHobby("Travelling")}
        >
          Change Hobby
        </button>
      </div>
      <BlogForm onFormSubmit={onFormSubmit} />
      <br />
      <BlogList blogs={blogs} deleteHandle={onDelete} />
    </div>
  );
};

export default Blog;
