import React, { useState } from "react";
import "../css/event.css";

function Event(props) {
  const [bgColor, setBgColor] = useState("burlywood");
  const [btnName, setName] = useState("Click me");

  const bgChangeHandler = () => {
    console.log("bg change handler called");
    setBgColor("yellow");
    setName("Changed !");
  };
  const againBgChangeHandler = () => {
    setBgColor("green");
    setName("Again Changed !!!");
  };

  return (
    <div
      className="event-div"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <button
        className="btn"
        onClick={bgChangeHandler}
        onDoubleClick={againBgChangeHandler}
      >
        {btnName}
      </button>
    </div>
  );
}

export default Event;
