import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

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
            src="../src/assets/Images/LogoLR.png"
            alt="Logo for mobile"
          />
        </Link>
      </div>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <ul className="nav-links">
          <li className="nav-li logo-desk">
            <Link className="nav-link" to="/" onClick={handleShowLinks}>
              <img
                className="img-logo-desk"
                src="../src/assets/Images/LogoLR.png"
                alt="Logo for desktop"
              />
            </Link>
          </li>
          <li className="nav-li">
            <Link
              className="nav-link"
              to="/informations"
              onClick={handleShowLinks}
            >
              <h1>Informations</h1>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/lineup" onClick={handleShowLinks}>
              <h1>Line-Up</h1>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/schedule" onClick={handleShowLinks}>
              <h1>Horaire</h1>
            </Link>
          </li>
          <li className="nav-li">
            <Link
              className="nav-link"
              to="/reservation"
              onClick={handleShowLinks}
            >
              <h1>Reservations</h1>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/map" onClick={handleShowLinks}>
              <h1>Carte</h1>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/favoris" onClick={handleShowLinks}>
              ⭐
            </Link>
          </li>
        </ul>
        <button className="nav-burger" type="button" onClick={handleShowLinks}>
          <span className="burgerBar" />
        </button>
      </nav>
    </div>
  );
}
export default NavBar;
