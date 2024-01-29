import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import PopularItems from '../components/PopularItems/PopularItems';
import AboutSection from '../components/AboutSection/AboutSection';
import QuotesSection from '../components/QuotesSection/QuotesSection';
import InfiniteCaroussel from '../components/InfiniteCaroussel/InfiniteCaroussel';
import BottomSection from '../components/BottomSection/BottomSection';
import Footer from '../components/Footer/Footer';

function HomePage() {
  const navigate = useNavigate();

  const goToProductsPage = () => {
    navigate('/products/all-products');
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar goToProductsPage={goToProductsPage} />
      <HeroSection />
      <PopularItems goToProductsPage={goToProductsPage} />
      <AboutSection />
      <QuotesSection />
      <InfiniteCaroussel />
      <BottomSection />
      <Footer />
    </>
  );
}

export default HomePage;
