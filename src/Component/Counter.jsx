import React, { useState } from "react";
import "../css/counter.css";

function Counter(props) {
  const [counter, setCounter] = useState(10);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  const add100 = () => {
    setCounter(counter + 100);
  };
  const minus100 = () => {
    setCounter(counter - 100);
  };
  return (
    <div className="counter-div">
      <h1 className="counter-data">{counter}</h1>
      <button className="btn" onClick={add100}>
        +100
      </button>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>{" "}
      <button className="btn" onClick={minus100}>
        -100
      </button>
      <br />
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
