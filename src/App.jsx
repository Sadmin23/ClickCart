import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';

// Dummy authentication check function
const isAuthenticated = () => {
  // Implement your authentication logic here
  // For demonstration purposes, I'm just checking if there's a token in localStorage
  return true;
};

// Protected route HOC
const ProtectedRoute = ({ element, path }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/sign-in" replace state={{ from: path }} />
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} path={"/"}/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}