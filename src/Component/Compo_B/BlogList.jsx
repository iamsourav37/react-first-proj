import React from "react";

function ListItems(props) {
  return (
    <>
      <div className="m-2">
        <li className="list-group-item">
          {props.value.content}
          <br />
          Written by : {props.value.name}
        </li>
        <button
          className="btn btn-outline-danger mt-2"
          onClick={() => {
            return props.deleteHandle(props.value.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}

const BlogList = (props) => {
  console.log("BlogList component called");

  const listItems = props.blogs.map((value, index) => {
    return (
      <ListItems key={index} value={value} deleteHandle={props.deleteHandle} />
    );
  });
  return (
    <div>
      <ul className="list-group m-2">{listItems}</ul>
    </div>
  );
};

export default BlogList;
