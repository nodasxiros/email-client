import React from 'react';
import { NavLink } from 'react-router-dom';

const BaseHeader: React.FC = () => {
  return (
    <div className="links">
      <NavLink to="/signup" className={({ isActive }) => `link ${ isActive ? 'active' : ''}`}>
        Sign up
      </NavLink>
      <NavLink to="/signin" className={({ isActive }) => `link ${ isActive ? 'active' : ''}`}>
        Sign in
      </NavLink>
      <NavLink to="/" className={({ isActive }) => `link ${ isActive ? 'active' : ''}`}>
        Home
      </NavLink>
      <NavLink to="/dashboard" className={({ isActive }) => `link ${ isActive ? 'active' : ''}`}>
        Dashboard
      </NavLink>
    </div>
  )
}

export default BaseHeader;
