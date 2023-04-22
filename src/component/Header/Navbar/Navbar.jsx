import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-left">
          <ul className="navbar-left-ul">
            <li className="item1">
              <a href="">STORY</a>
            </li>
            <li className="item">
              <a href="">AITHER HUB</a>
            </li>
            <li className="item">
              <a href="">THE NFTS</a>
            </li>
          </ul>
          <img src="./image1/nav-under.png" alt="anim" />
        </div>

        <div className="navbar-mid">
          <img src="./image1/Vector.png" className="vector" alt="vector" />
          <div className="mid-logo">
            <span>SUBTERRA:</span>
            <br />
            <span className="digit">2044</span>
          </div>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="item">
              <a href="">HOW TO BUY</a>
            </li>
            <li className="item-last">
              <a href="">CONNECT</a>
            </li>
          </ul>
          <img src="./image1/nav-under-r.png" alt="anim" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
