import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import PopularItems from '../components/PopularItems/PopularItems';
import PropTypes from 'prop-types';

function HomePage({ productsData, loading, error }) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularItems
        productsData={productsData}
        loading={loading}
        error={error}
      />
    </>
  );
}

HomePage.propTypes = {
  productsData: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default HomePage;
