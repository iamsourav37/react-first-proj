import React, { useState } from "react";
import "../../css/GetTime.css";

const GetTime = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);
  return (
    <div className="time-div">
      <h1 className="time-data">⏲️ Current Time : {time}</h1>
      {/* <button className="btn" onClick={updateTime}>
        Get Time
      </button> */}
    </div>
  );
};
export default GetTime;
