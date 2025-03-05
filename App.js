import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/Loginform';
import RegisterForm from './components/LoginForm/Register';
import ForgotPassword from './components/LoginForm/ForgotPassword';
import Home from './components/LoginForm/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/LoginForm" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
