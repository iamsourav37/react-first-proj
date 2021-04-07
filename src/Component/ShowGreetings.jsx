import React from "react";

function ShowGreeting(props) {
  let greetings = "";
  const hours = new Date().getHours();
  console.log(hours);

  if (hours < 12) {
    greetings = "morning";
  } else if (hours >= 12 && hours < 17) {
    greetings = "afternoon";
  } else {
    greetings = "evening";
  }

  return (
    <>
      <div className="greetings">
        <h1>
          Hello {props.name}, good {greetings}
        </h1>
      </div>
    </>
  );
}

export default ShowGreeting;
