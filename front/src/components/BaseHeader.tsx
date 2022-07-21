import React from 'react';
import { NavLink } from 'react-router-dom';

const BaseHeader: React.FC = () => {
  return (
    <div>
      <NavLink to="/signup">
        Sign up
      </NavLink>
      <NavLink to="/signin">
        Sign in
      </NavLink>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/dashboard">
        Dashboard
      </NavLink>
    </div>
  )
}

export default BaseHeader;
