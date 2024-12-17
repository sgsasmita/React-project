import React from 'react';
import './Cart.css'; // Create this file for styling

const Cart = ({ cart, setCart }) => {
  const handleRemoveFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemToRemove.id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
