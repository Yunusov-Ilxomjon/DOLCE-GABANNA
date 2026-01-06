import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="navbar">

        {/* DESKTOP TOP */}
        <div className="navbar-top">
          <ul>
            <li><a href="#">Find a store</a></li>
            <li>|</li>
            <li><a href="#">Help</a></li>
            <li>|</li>
            <li><a href="#">Join Us</a></li>
            <li>|</li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>

        {/* MAIN NAV */}
        <div className="navbar-main">

          <div className="logo">
            <a href="./"><img src="./images/navbar/logo.png" alt="logo" /></a>
          </div>

          <nav className="nav-links">
      <ul>
        <li><Link to="/categories">New & Featured</Link></li>
        <li><Link to="/comments">Men</Link></li>
        <li><Link to="/comments">Women</Link></li>
        <li><Link to="/comments">Sale</Link></li>
      </ul>
          </nav>

          <div className="nav-icons">
            <input type="text" placeholder="Search" />
            <img src="./images/navbar/search.png" alt="" />
            <img src="./images/navbar/like.png" alt="" />
            <img src="./images/navbar/portfel.png" alt="" />

            {/* HAMBURGER */}
            <button className="hamburger" onClick={() => setOpen(true)}>
              ☰
            </button>
          </div>

        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>

        <div className="mobile-header">
          <img src="./images/navbar/logo.png" alt="" />
          <button className="close" onClick={() => setOpen(false)}>✕</button>
        </div>

        <ul className="mobile-links">
          <li>New & Featured <span>›</span></li>
          <li>Men <span>›</span></li>
          <li>Women <span>›</span></li>
          <li>Sale <span>›</span></li>
        </ul>

        <div className="mobile-auth">
          <button className="join">Join Us</button>
          <button className="signin">Sign In</button>
        </div>

      </div>
    </>
  );
};

export default Navbar;
