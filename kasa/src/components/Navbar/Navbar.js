//creer une navbar avec le logo a gauche et lien accueil et a propos à droite 

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/images/kasa-logo-pink.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="nav-menu">
        <Link to="/" className="nav-links">
          Accueil
        </Link>
        <Link to="/about" className="nav-links">
          A propos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar



