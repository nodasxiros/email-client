import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const BaseHeader: React.FC = () => {
  const accessToken = useSelector((state: RootState) => state.auth.access_token);
  return (
    <div className="links">
      { 
        !accessToken &&
        <>
          <NavLink to="/signup" className={({ isActive }) => `link ${ isActive ? 'active' : ''}`}>
            Sign up
          </NavLink>
          <NavLink to="/signin" className={({ isActive }) => `link ${ isActive ? 'active' : ''}`}>
            Sign in
          </NavLink>
        </>
      }
      <NavLink to="/" className={({ isActive }) => `link ${ isActive ? 'active' : ''}`}>
        Home
      </NavLink>
      {
        accessToken &&
        <NavLink to="/dashboard" className={({ isActive }) => `link ${ isActive ? 'active' : ''}`}>
          Dashboard
        </NavLink>
      }
    </div>
  )
}

export default BaseHeader;
