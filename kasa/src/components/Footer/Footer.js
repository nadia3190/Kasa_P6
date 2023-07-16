//le footer 

import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/kasa-logo-white.png';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
            <img src={logo} alt="logo" className="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
            </div>
          
        </div>
        </footer>
    );
    }
export default Footer;
