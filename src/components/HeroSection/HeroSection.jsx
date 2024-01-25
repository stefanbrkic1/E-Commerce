import './hero-section.css';
import PropTypes from 'prop-types';

function HeroSection({
  goToElectronicsPage,
  goToClothesPage,
  goToFurniturePage,
  goToShoesPage,
}) {
  return (
    <section className="hero-section-container">
      <div className="hero-section">
        <div className="hero-cell1" onClick={goToElectronicsPage}>
          <div className="cell-image electronics"></div>
          <div className="hero-cell-text">ELECTRONICS</div>
        </div>

        <div className="hero-cell2" onClick={goToClothesPage}>
          <div className="cell-image clothes"></div>
          <div className="hero-cell-text">CLOTHES</div>
        </div>

        <div className="hero-cell3" onClick={goToFurniturePage}>
          <div className="cell-image furniture"></div>
          <div className="hero-cell-text">FURNITURE</div>
        </div>

        <div className="hero-cell4" onClick={goToShoesPage}>
          <div className="cell-image shoes"></div>
          <div className="hero-cell-text">SHOES</div>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  goToElectronicsPage: PropTypes.func,
  goToClothesPage: PropTypes.func,
  goToFurniturePage: PropTypes.func,
  goToShoesPage: PropTypes.func,
};

export default HeroSection;
