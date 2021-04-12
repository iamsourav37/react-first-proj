import React, { useEffect, useState } from "react";
import axios from "axios";

const divStyle = {
  width: "50%",
  height: "100vh",
  backgroundColor: "lightgreen",
  padding: "30px",
};

const AxiosDemo = (props) => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState("");
  const [moves, setMoves] = useState();

  useEffect(() => {
    console.log("useEffect invoked");
    async function getData() {
      console.log(`url: https://pokeapi.co/api/v2/pokemon/${num}`);
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log("Response : ", res);

      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <div style={divStyle}>
      <h1>You choose : {num}</h1>
      <h1>My name is : {name}</h1>
      <h1>I have {moves} moves</h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
};

export default AxiosDemo;
