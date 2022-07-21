import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import BaseHeader from './components/BaseHeader';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import AuthRoute from './components/auth';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          {/* Header */}
          <BaseHeader />
        </div>
        <div>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SignIn />} path="/signin" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            } path="/dashboard" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
