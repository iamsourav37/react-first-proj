import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <br />
      <br />
      <p>This links are from React-Rounter-DOM</p>
      <Link to="/">Home Page</Link>
      <Link to="/api">Api Page</Link>
      <Link to="/time">Time Page</Link>
      <Link to="/counter">Counter Page</Link>
      <br />
      <br />
      <br />
      <p>This links are common html links</p>
      <a href="/">Home Page</a>
      <a href="/api">Api Page</a>
      <a href="/time">Time Page</a>
      <a href="/counter">Counter Page</a>
    </div>
  );
};

export default Menu;
