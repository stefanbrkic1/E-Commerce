import fetchProducts from './utils/productsApi';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import './styles/global.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProductsData(data);
        console.log(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const goToProductsPage = () => {
    navigate('/products', {
      state: { productsData, loading, error },
    });
  };

  const goToElectronicsPage = () => {
    navigate('/products', {
      state: { productsData, loading, error, category: 'electronics' },
    });
  };

  const goToClothesPage = () => {
    navigate('/products', {
      state: { productsData, loading, error, category: 'clothes' },
    });
  };

  const goToFurniturePage = () => {
    navigate('/products', {
      state: { productsData, loading, error, category: 'furniture' },
    });
  };

  const goToShoesPage = () => {
    navigate('/products', {
      state: { productsData, loading, error, category: 'shoes' },
    });
  };

  return (
    <HomePage
      productsData={productsData}
      loading={loading}
      error={error}
      goToProductsPage={goToProductsPage}
      goToElectronicsPage={goToElectronicsPage}
      goToClothesPage={goToClothesPage}
      goToFurniturePage={goToFurniturePage}
      goToShoesPage={goToShoesPage}
    />
  );
}

export default App;
