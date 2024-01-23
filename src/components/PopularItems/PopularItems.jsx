import { useRef } from 'react';
import './popular-items.css';
import ProductCard from '../ProductCard/ProductCard';
import PropTypes from 'prop-types';

function PopularItems({ productsData, loading, error }) {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -265,
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 265,
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
        {/*CARD COMPONENTS */}
        {productsData && productsData.length > 0 && (
          <>
            <ProductCard
              loading={loading}
              error={error}
              image={productsData[0].images[0]}
              description={productsData[0].title}
              price={productsData[0].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[1].images[0]}
              description={productsData[1].title}
              price={productsData[1].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[2].images[0]}
              description={productsData[2].title}
              price={productsData[2].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[3].images[0]}
              description={productsData[3].title}
              price={productsData[3].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[4].images[0]}
              description={productsData[4].title}
              price={productsData[4].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[5].images[0]}
              description={productsData[5].title}
              price={productsData[5].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[6].images[0]}
              description={productsData[6].title}
              price={productsData[6].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[7].images[0]}
              description={productsData[7].title}
              price={productsData[7].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[8].images[0]}
              description={productsData[8].title}
              price={productsData[8].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[9].images[0]}
              description={productsData[9].title}
              price={productsData[9].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[10].images[0]}
              description={productsData[10].title}
              price={productsData[10].price}
            />
          </>
        )}
        {/*CARD COMPONENT */}
      </div>
    </section>
  );
}

PopularItems.propTypes = {
  productsData: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default PopularItems;
