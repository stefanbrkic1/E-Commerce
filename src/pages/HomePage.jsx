import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import PopularItems from '../components/PopularItems/PopularItems';
import AboutSection from '../components/AboutSection/AboutSection';
import QuotesSection from '../components/QuotesSection/QuotesSection';
import InfiniteCaroussel from '../components/InfiniteCaroussel/InfiniteCaroussel';
import BottomSection from '../components/BottomSection/BottomSection';
import Footer from '../components/Footer/Footer';

function HomePage({ productsData, loading, error, cartItems, setCartItems }) {
  const navigate = useNavigate();

  const goToProductsPage = () => {
    navigate('/products');
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar
        goToProductsPage={goToProductsPage}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <HeroSection
        productsData={productsData}
        loading={loading}
        error={error}
      />
      <PopularItems
        productsData={productsData}
        loading={loading}
        error={error}
        goToProductsPage={goToProductsPage}
      />
      <AboutSection />
      <QuotesSection />
      <InfiniteCaroussel />
      <BottomSection />
      <Footer />
    </>
  );
}

HomePage.propTypes = {
  productsData: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.string,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

export default HomePage;
