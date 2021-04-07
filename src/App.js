import React from "react";
import Person from "./Component/Person";
import LoginForm from "./Component/LoginForm";
import ShowGreetings from "./Component/ShowGreetings";

import "./css/index.css";

function App() {
  return (
    <>
      <LoginForm />
      <ShowGreetings name="Developer" />
      <Person name="Sourav Ganguly" age="22" prof="Developer" />
    </>
  );
}

export default App;
