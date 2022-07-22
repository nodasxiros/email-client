import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Home: React.FC = () => {
  const accessToken = useSelector((state: RootState) => state.auth.access_token);
  const [token, setToken] = useState<string | null>(accessToken);
  

  useEffect(() => {
  }, [token])
  return (
    <>
      <h1 style={{color: 'black'}}>Home Page</h1>
      { !token && <h3>You are not logged in.</h3> }
      { token && <h3>You are logged in!</h3> }
    </>
  )
}

export default Home;
