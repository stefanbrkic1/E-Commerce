import './styles/global.css';
import fetchProducts from './utils/productsApi';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <HomePage
              productsData={productsData}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              productsData={productsData}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/product"
          element={
            <ProductPage
              productsData={productsData}
              loading={loading}
              error={error}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
