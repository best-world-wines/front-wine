import React from 'react';
import { Navigation } from '../Navigation';
import './Header.scss';
import { Logo } from '../Logo/Logo';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo/>
      <nav className="header__nav nav">
        <ul className="nav__list">
          <Navigation to="/" text="Home"/>
          <Navigation to="wines" text="Wines"/>
        </ul>
      </nav>
    </div>
  )
}
