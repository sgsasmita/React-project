import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create this file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Supermarket</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
