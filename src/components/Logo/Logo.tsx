import './Logo.scss';
import React from 'react';

export const Logo = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <img onClick={handleScrollToTop} className='logo' src="img/logo.svg" alt='wine' />
  );
};
