import React from 'react';
import {Link, useLocation} from 'react-router-dom';

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
  const {pathname} = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Walt Disney Movies Dataset</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <NavItemLink path={pathname} to="/">
            Home
          </NavItemLink>
        </ul>
      </div>
    </nav>
  );
}
