import React from "react";

const navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="nav-left">
          <a href="/">
            <div className="logo">PORTFOLIO</div>
          </a>
        </div>
        <div className="nav-right">
          <ul className="nav-right-list">
            <li>
              <a href="#first">Home</a>
            </li>
            <li>
              <a href="#third">About</a>
            </li>
            <li>
              <a href="#second">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
