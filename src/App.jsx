import fetchProducts from './utils/productsApi';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import './styles/global.css';

function App() {
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProductsData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return <HomePage />;
}

export default App;
