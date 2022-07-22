import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
  children: any
}

const AuthRoute: React.FC<Props> = ({ children }) => {
  const accessToken = useSelector((state: RootState) => state.auth.access_token);
  if (!accessToken)
  return (
    <Navigate to="/" replace />
  )

  return children;
}

export default AuthRoute;
