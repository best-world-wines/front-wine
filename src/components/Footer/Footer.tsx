import './Footer.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

export const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <footer className="footer">
      <Logo/>
      <div className="footer__links">
        <Link className='footer__links-link' to="https://github.com/best-world-wines" target="_blank" rel="noopener noreferrer">GitHub</Link>
        <Link className='footer__links-link' to="/contact_us">Contact</Link>
        <Link className='footer__links-link' to="/license">License</Link>
      </div>
        <button className="footer__button" onClick={handleScrollToTop}>
		      ↑
        </button>
    </footer>
  );
};
