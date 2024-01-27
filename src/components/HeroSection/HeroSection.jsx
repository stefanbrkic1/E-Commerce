import './hero-section.css';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  const goToElectronicsPage = () => {
    navigate('/products', {
      state: { category: 'electronics' },
    });
  };

  const goToClothesPage = () => {
    navigate('/products', {
      state: { category: 'clothes' },
    });
  };

  const goToFurniturePage = () => {
    navigate('/products', {
      state: { category: 'furniture' },
    });
  };

  const goToShoesPage = () => {
    navigate('/products', {
      state: { category: 'shoes' },
    });
  };

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

export default HeroSection;
