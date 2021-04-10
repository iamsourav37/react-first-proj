import React, { useState } from "react";
import "../css/formExample.css";

function FormExample() {
  let formValue = "";

  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  const onChangeInputEvent = (event) => {
    formValue = event.target.value;
  };

  const changeHandler = (event) => {
    event.preventDefault();
    console.log(event);
    setName(formValue);
  };

  return (
    <div className="form-div">
      <h1>Hello {name}</h1>
      <form onSubmit={changeHandler}>
        <input
          type="text"
          placeholder="Enter Your Username"
          onChange={onChangeInputEvent}
        />{" "}
        <input type="password" placeholder="Enter Password" />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormExample;
