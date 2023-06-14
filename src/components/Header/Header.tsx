import React from 'react';
import { Navigation } from '../Navigation';
import './Header.scss';
import logo from "../../images/Logo1.png";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <img className='header__logo' src={logo} alt='wine' />
      <nav className="header__nav nav">
        <ul className="nav__list">
          <Navigation to="/" text="Home"/>
          <Navigation to="wines" text="Wines"/>
        </ul>
      </nav>
    </div>
  )
}
