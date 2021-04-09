import React from "react";
import Header from "./Component/Header";
import GetTime from "./Component/GetTime";

import "./css/index.css";

const msg = `React Hooks 🍾`;

function App() {
  return (
    <>
      <Header msg={msg} />
      <GetTime />
    </>
  );
}

export default App;
