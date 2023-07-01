//le footer 

import React from 'react';
import './Footer.css';
import logo from '../../assets/images/kasa-logo-white.png';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
            <img src={logo} alt="logo" className="logo" />
            </div>
          
        </div>
        </footer>
    );
    }
export default Footer;
