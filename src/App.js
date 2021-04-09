import React from "react";
import Header from "./Component/Header";
import Card from "./Component/Card";

import "./css/index.css";
import placesData from "./data.jsx";

const length = placesData.length;
const msg = `Top ${length} places to visit in India`;

// function makeCard() {}

function App() {
  return (
    <>
      <Header msg={msg} />
      <Card
        imgUrl={placesData[0].imgUrl}
        placeName={placesData[0].name}
        desc={placesData[0].desc}
      />
      <Card
        imgUrl={placesData[1].imgUrl}
        placeName={placesData[1].name}
        desc={placesData[1].desc}
      />
      <Card
        imgUrl={placesData[2].imgUrl}
        placeName={placesData[2].name}
        desc={placesData[2].desc}
      />{" "}
      <Card
        imgUrl={placesData[3].imgUrl}
        placeName={placesData[3].name}
        desc={placesData[3].desc}
      />
      <Card
        imgUrl={placesData[3].imgUrl}
        placeName={placesData[3].name}
        desc={placesData[3].desc}
      />
    </>
  );
}

export default App;
