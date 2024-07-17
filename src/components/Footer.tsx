import React from 'react';
import '../styles/Footer.css'
import banner from '../assets/BANER-SHANNH 1.png'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <img src={banner} alt="Footer Banner" />
    </div>
  );
};

export default Footer;
