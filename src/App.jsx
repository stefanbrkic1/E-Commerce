import fetchProducts from './utils/productsApi';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Navbar from './components/Navbar/Navbar';
import './styles/global.css';

function App() {
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activePage, setActivePage] = useState('home-page');

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
    <>
      <Navbar setActivePage={setActivePage} />
      {activePage === 'home-page' ? (
        <HomePage productsData={productsData} loading={loading} error={error} />
      ) : (
        <ProductsPage
          productsData={productsData}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
}

export default App;
