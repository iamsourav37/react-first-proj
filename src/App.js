import React from "react";
import Header from "./Component/Header";
import Counter from "./Component/Counter";

import "./css/index.css";

const msg = `React Hooks 🍾`;

function App() {
  return (
    <>
      <Header msg={msg} />
      <Counter />
    </>
  );
}

export default App;
