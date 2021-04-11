import React from "react";
import Header from "./Component/Header";
import BootstarapDemo from "./Component/BootstrapDemo";

import "./css/index.css";

const msg = `Bootstrap with React`;

function App() {
  return (
    <>
      <Header msg={msg} />
      <BootstarapDemo />
    </>
  );
}

export default App;
