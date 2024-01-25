import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import PopularItems from '../components/PopularItems/PopularItems';
import AboutSection from '../components/AboutSection/AboutSection';
import QuotesSection from '../components/QuotesSection/QuotesSection';
import InfiniteCaroussel from '../components/InfiniteCaroussel/InfiniteCaroussel';
import BottomSection from '../components/BottomSection/BottomSection';
import Footer from '../components/Footer/Footer';

function HomePage({
  productsData,
  loading,
  error,
  goToProductsPage,
  goToElectronicsPage,
  goToClothesPage,
  goToFurniturePage,
  goToShoesPage,
}) {
  return (
    <>
      <Navbar goToProductsPage={goToProductsPage} />
      <HeroSection
        goToElectronicsPage={goToElectronicsPage}
        goToClothesPage={goToClothesPage}
        goToFurniturePage={goToFurniturePage}
        goToShoesPage={goToShoesPage}
      />
      <PopularItems
        productsData={productsData}
        loading={loading}
        error={error}
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
  goToProductsPage: PropTypes.func,
  goToElectronicsPage: PropTypes.func,
  goToClothesPage: PropTypes.func,
  goToFurniturePage: PropTypes.func,
  goToShoesPage: PropTypes.func,
};

export default HomePage;
