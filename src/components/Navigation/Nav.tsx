import { NavLink } from "react-router-dom";
import cn from 'classnames';
import React from "react";


type Props = {
to: string,
text: string,
}
export const Navigation: React.FC<Props> = ({to, text}) => (
  (
    <li className='nav__item'>
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn('nav__link', {
            'nav__link--active': isActive,
          })
        }
      >
        {text}
      </NavLink>
    </li>
  )
)
