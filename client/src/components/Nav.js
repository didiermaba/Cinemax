import React from "react";
import cinemaxLogo from "../assets/cinemax-lg.png";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
      <Link to="/" ><img src={cinemaxLogo} alt="" width="150" /></Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" >
              Recherche
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" >
              Mes favoris
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
