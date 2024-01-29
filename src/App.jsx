import './styles/global.css';
import fetchProducts from './utils/productsApi';
import { useState, useEffect, createContext } from 'react';
import Router from './components/Router';

export const ShopContext = createContext();

function App() {
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const contextValues = {
    productsData,
    loading,
    error,
    cartItems,
    setCartItems,
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProductsData(data);
        console.log(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ShopContext.Provider value={contextValues}>
      <Router />
    </ShopContext.Provider>
  );
}

export default App;
