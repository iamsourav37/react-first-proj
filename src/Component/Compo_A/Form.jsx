import React, { useState } from "react";
import "../css/formExample.css";

function FormExample() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [greetings, setGreetings] = useState("");

  const fNameChangeInputEvent = (event) => {
    setFName(event.target.value);
  };
  const lNameChangeInputEvent = (event) => {
    setLName(event.target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    let fullName = `${fName} ${lName}`;
    setGreetings(fullName);
  };

  return (
    <div className="form-div">
      <h1>Hello {greetings}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Firstname"
          onChange={fNameChangeInputEvent}
          value={fName}
        />{" "}
        <input
          type="text"
          placeholder="Lastname"
          onChange={lNameChangeInputEvent}
          value={lName}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormExample;
