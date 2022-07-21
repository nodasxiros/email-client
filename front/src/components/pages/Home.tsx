import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const accessToken = localStorage.getItem('access_token');
  const [token, setToken] = useState<string | null>(accessToken);
  useEffect(() => {
    if (token)
    setIsLoggedIn(true);
  }, [token, isLoggedIn])
  return (
    <>
      <h1 style={{color: 'black'}}>Home Page</h1>
      { !isLoggedIn && <h3>You are not logged in.</h3> }
      { isLoggedIn && <h3>You are logged in!</h3> }
    </>
  )
}

export default Home;
