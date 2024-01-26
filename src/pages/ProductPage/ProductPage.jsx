import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import './product-page.css';

function ProductPage() {
  const { state } = useLocation();
  const { productsData, productId } = state || {};
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const displayingProduct = productsData.filter((product) => {
      return product.id === productId;
    });
    setProduct(displayingProduct[0]);
  }, [productsData, productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="product-page-container"></div>
      <Footer />
    </>
  );
}

export default ProductPage;
