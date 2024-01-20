import { useRef } from 'react';
import './popular-items.css';

function PopularItems() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
      });
    }
  };

  return (
    <section className="popular-items-container">
      <h2 className="popular-heading">POPULAR ITEMS</h2>
      <button type="button" className="view-all-link">
        View All
      </button>
      <button
        type="button"
        className="arrow-left"
        onClick={scrollLeft}
      ></button>
      <button
        type="button"
        className="arrow-right"
        onClick={scrollRight}
      ></button>
      <div
        className="popular-cards-container"
        id="popularCardsContainer"
        ref={containerRef}
      >
        {/*CARD COMPONENT */}
        <div className="product-card">
          <div className="product-image">
            <button type="button" className="card-btn">
              Details
            </button>
          </div>
          <div className="product-short-description">BFSDFDSFD</div>
          <div className="product-price">25$</div>
        </div>
        {/*CARD COMPONENT */}
      </div>
    </section>
  );
}

export default PopularItems;
