import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import BaseHeader from './components/BaseHeader';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import AuthRoute from './components/auth';
import AddEditEmailForm from './components/pages/EmailForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <BaseHeader />
        </div>
        <div className="main-content">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SignIn />} path="/signin" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            } path="/dashboard" />
            <Route element={
              <AuthRoute>
                <AddEditEmailForm />
              </AuthRoute>
            } path="/dashboard/emails/:id" />
            <Route element={
              <AuthRoute>
                <AddEditEmailForm />
              </AuthRoute>
            } path="/dashboard/emails/create" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
