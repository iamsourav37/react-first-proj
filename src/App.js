import React from "react";
import Header from "./Component/Header";
import MaterialUiDemo from "./Component/MaterialUiDemo";

import "./css/index.css";

const msg = `React Hooks & Event`;

function App() {
  return (
    <>
      <Header msg={msg} />
      <MaterialUiDemo />
    </>
  );
}

export default App;
