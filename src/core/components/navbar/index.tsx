import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

interface NavItemLinkProps {
  children: React.ReactElement | string;
  path: string;
  to: string;
}

const NavItemLink = ({children, path, to}: NavItemLinkProps) => {
  return (
    <li className={`nav-item ${path === to ? 'active' : ''}`}>
      <Link className="nav-link" to={to}>{children}</Link>
    </li>
  );
};

export const Navbar = () => {
  const {path} = useRouteMatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Walt Disney Movies Dataset</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <NavItemLink path={path} to="/">
            Home
          </NavItemLink>
          <NavItemLink path={path} to="/m">
            All movies
          </NavItemLink>
        </ul>
      </div>
    </nav>
  );
}
