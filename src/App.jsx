import './styles/global.css';
import fetchProducts from './utils/productsApi';
import { useEffect } from 'react';
import Router from './components/Router';
import {
  setProducts,
  setError,
  setLoading,
} from './app/reducers/productsSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        dispatch(setProducts(data));
      })
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch]);

  return <Router />;
}

export default App;
