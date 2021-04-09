import React from "react";
import Header from "./Component/Header";
import Card from "./Component/Card";

import "./css/index.css";
import placesData from "./data.jsx";

console.log(placesData);

const length = placesData.length;
const msg = `Top ${length} places to visit in India`;

// function makeCard() {}

function App() {
  return (
    <>
      <Header msg={msg} />
      {placesData.map((obj) => {
        return (
          <Card
            key={obj.id}
            imgUrl={obj.imgUrl}
            placeName={obj.name}
            desc={obj.desc}
          />
        );
      })}
    </>
  );
}

export default App;
