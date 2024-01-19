import fetchProducts from './utils/productsApi';
import { useState, useEffect } from 'react';
import './App.css';

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

  if (error) return <div>A network error was encountered</div>;
  if (loading) return <div>Loading...</div>;

  return <img src={productsData[0].images[0]} alt="" />;
}

export default App;
