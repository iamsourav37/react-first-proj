import React from "react";
import moduleName from "../../css/header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.msg}</h1>
    </div>
  );
}

export default Header;
