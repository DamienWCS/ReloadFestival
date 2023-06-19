import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => setShowLinks(!showLinks);
  const handleCloseNavbar = () => setShowLinks(false);
  return (
    <div className="block-nav">
      <div className="logo-mobile">
        <Link to="/" onClick={handleCloseNavbar}>
          <img
            className="img-logo-mobile"
            src="../src/images/LogoLR.png"
            alt="Logo for mobile"
          />
        </Link>
      </div>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <ul className="nav-links">
          <li className="nav-li">
            <Link
              className="nav-link"
              to="/informations"
              onClick={handleShowLinks}
            >
              Informations
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/lineup" onClick={handleShowLinks}>
              Line-Up
            </Link>
          </li>
          <li className="nav-li logo-desk">
            <Link className="nav-link" to="/" onClick={handleShowLinks}>
              <img
                className="img-logo-desk"
                src="../src/images/LogoLR.png"
                alt="logo for desktop"
              />
            </Link>
          </li>
          <li className="nav-li">
            <Link
              className="nav-link"
              to="/reservation"
              onClick={handleShowLinks}
            >
              Reservations
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/map" onClick={handleShowLinks}>
              Carte
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/favoris" onClick={handleShowLinks}>
              ⭐
            </Link>
          </li>
        </ul>
        <button className="nav-burger" type="button" onClick={handleShowLinks}>
          <span span className="burgerBar" />
        </button>
      </nav>
    </div>
  );
}
export default NavBar;
