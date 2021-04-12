import React from "react";
import Header from "./Component/Compo_A/Header";
import Blog from "./Component/Compo_B/Blog";

import "./css/app.css";

const msg = `Bootstrap with React`;

function App() {
  return (
    <>
      <Header msg={msg} />
      <Blog />
    </>
  );
}

export default App;
