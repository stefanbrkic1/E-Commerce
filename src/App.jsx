import './styles/global.css';
import { useEffect } from 'react';
import Router from './components/Router';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './app/reducers/productsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <Router />;
}

export default App;
