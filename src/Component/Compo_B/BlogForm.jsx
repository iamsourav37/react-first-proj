import React from "react";

const BlogForm = (props) => {
  console.log("BlogForm component called");

  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(event);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
          required={true}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Blog-Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter blog content"
          required={true}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
