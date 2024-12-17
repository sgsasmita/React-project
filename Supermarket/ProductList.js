import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = ({ cart, setCart, currentUser }) => {
  const [productsData, setProductsData] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
        const products = response.data.map((item, index) => ({
          id: item.id,
          name: `Product ${index + 1}`,
          price: (Math.random() * 10 + 1).toFixed(2), 
          image: 'https://via.placeholder.com/150' 
        }));
        setProductsData(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (!currentUser) {
      alert('Please log in to add items to your cart.');
      return;
    }
    setCart((prev) => [...prev, product]);
    setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
    alert(`${product.name} added to cart!`);
  };

  const handleCreateProduct = async () => {
    try {
      const newProduct = {
        id: productsData.length + 1,
        name: 'New Product',
        price: (Math.random() * 10 + 1).toFixed(2),
        image: 'https://via.placeholder.com/150'
      };
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newProduct);
      setProductsData([...productsData, { ...newProduct, id: response.data.id }]);
      alert('Product created successfully!');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdateProduct = async (productId) => {
    try {
      const updatedProduct = {
        name: `Updated Product ${productId}`,
        price: (Math.random() * 10 + 1).toFixed(2)
      };
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${productId}`, updatedProduct);
      setProductsData(productsData.map((product) => 
        product.id === productId ? { ...product, ...updatedProduct } : product
      ));
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${productId}`);
      setProductsData(productsData.filter((product) => product.id !== productId));
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!currentUser) {
    return (
      <div className="container">
        <h2>Product List</h2>
        <p>Please log in to view and add products to your cart.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Product List</h2>
      <button onClick={handleCreateProduct}>Create New Product</button>
      <div className="product-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price ? product.price : 'N/A'}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={addedToCart[product.id]}
              style={{ backgroundColor: addedToCart[product.id] ? 'green' : '#007bff' }}
            >
              {addedToCart[product.id] ? 'Added ✔️' : 'Add to Cart'}
            </button>
            <button onClick={() => handleUpdateProduct(product.id)}>Update Product</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Cart</h3>
        <p>Total Items: {cart.length}</p>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.name} - ${item.price ? item.price : '0.00'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
