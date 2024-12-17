import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Components/Cart'; // Import Cart
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
        <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser} />} />
        <Route path="/products" element={<ProductList cart={cart} setCart={setCart} currentUser={currentUser} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> {/* Cart Route */}
        <Route path="/" element={
          <div style={{ textAlign: 'center' }}>
            <h1>Welcome to the Supermarket Management System</h1>
            <p>Please register or log in to continue.</p>
          </div>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
