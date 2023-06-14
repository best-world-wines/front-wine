import React from 'react';
import { Link, useRoutes, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import bread from '../../images/bread.svg';
import '../Breadcrumbs/Breadcrumbs.scss'

const routes = [
  {
    path: '/',
    name: 'Home',
    showBreadcrumb: false, // Add a flag to indicate if the breadcrumb should be displayed
  },
  {
    path: '/wines',
    name: 'Wines',
    showBreadcrumb: true,
  },
];

export const Breadcrumbss = () => {
  const location = useLocation();

  const element = useRoutes(
    routes.map((route) => ({
      path: route.path,
      element: route.showBreadcrumb ? (
        <Typography variant="body1">{route.name}</Typography>
      ) : null,
    }))
  );

  return (
	<div className='breadcrumbs'>
    <Breadcrumbs separator='>'>
      {location.pathname !== '/' && ( // Check if the current path is not the home page
        <Link to="/">
          <img className="breadcrumbs__icon" src={bread} alt="bread" />
        </Link>
      )}
      {element}
    </Breadcrumbs>

	</div>
  );
};
