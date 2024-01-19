import './hero-section.css';

function HeroSection() {
  return (
    <section className="hero-section-container">
      <div className="hero-section">
        <div className="hero-cell1">
          <div className="cell-image electronics"></div>
          <div className="hero-cell-text">ELECTRONICS</div>
        </div>

        <div className="hero-cell2">
          <div className="cell-image clothes"></div>
          <div className="hero-cell-text">CLOTHES</div>
        </div>

        <div className="hero-cell3">
          <div className="cell-image furniture"></div>
          <div className="hero-cell-text">FURNITURE</div>
        </div>

        <div className="hero-cell4">
          <div className="cell-image shoes"></div>
          <div className="hero-cell-text">SHOES</div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
