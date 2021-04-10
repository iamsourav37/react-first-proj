import React from "react";
import Header from "./Component/Header";
import FormExample from "./Component/Form";

import "./css/index.css";

const msg = `React Hooks & Event`;

function App() {
  return (
    <>
      <Header msg={msg} />
      <FormExample />
    </>
  );
}

export default App;
