import React from "react";
import "../css/cardstyle.css";

function Card(props) {
  return (
    <div className="card-div">
      <img src={props.imgUrl} alt="place-img-loading" className="card-img" />
      <h1 className="card-head">{props.placeName}</h1>
      <p className="card-desc">{props.desc}</p>
      <button className="card-btn">Book a trip </button>
    </div>
  );
}

export default Card;
