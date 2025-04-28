import React, { useState, useEffect } from 'react';
import axios from 'axios';
const WishList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await axios.get('/api/products');
        setProducts(productsRes.data);

        const favoritesRes = await axios.get('/api/favorites');
        setFavorites(favoritesRes.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      await axios.post('/api/cart', product);
      setCart([...cart, product]);
      console.log("Product added to cart:", product);
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  const handleAddToFavorites = async (product) => {
    try {
      await axios.post('/api/favorites', product);
      setFavorites([...favorites, product]);
      console.log("Product added to favorites:", product);
    } catch (err) {
      console.error("Error adding product to favorites:", err);
    }
  };

  const handleDeleteProduct = async (product) => {
    try {
      await axios.delete(`/api/products/${product.id}`);
      setProducts(products.filter(p => p.id !== product.id));
      console.log("Product deleted:", product);
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>Wish list</h3>
      <p style={{
        color: '#717171', fontSize: '1.3rem', marginBottom: '40px'
      }}>See your favorites list here</p>
      <div className="product-list-container">
        <div className="product-list">
          {products.map((product, index) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-buttons">
                <button onClick={() => handleAddToCart(product)} disabled={cart.includes(product)}>
                  {cart.includes(product) ? 'Added to Cart' : 'Add to Cart'}
                </button>
                <button onClick={() => handleAddToFavorites(product)} disabled={favorites.includes(product)}>
                  {favorites.includes(product) ? 'Favorited' : 'Favorite'}
                </button>
                <button onClick={() => handleDeleteProduct(product)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WishList