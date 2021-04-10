import React, { useState } from "react";
import "../css/formExample.css";

function FormExample() {
  let formValue;

  const [msg, setMsg] = useState("Hello");

  const onChangeInputEvent = (event) => {
    formValue = event.target.value;
  };

  const changeHandler = () => {
    let msg = `Hello ${formValue}`;
    setMsg(msg);
  };

  return (
    <div className="form-div">
      <h1>{msg}</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={onChangeInputEvent}
      />
      <button className="btn" onClick={changeHandler}>
        Submit
      </button>
    </div>
  );
}

export default FormExample;
