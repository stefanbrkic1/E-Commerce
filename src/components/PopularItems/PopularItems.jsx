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
              image={productsData[6].images[0]}
              description={productsData[6].title}
              price={productsData[6].price}
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
              image={productsData[4].images[0]}
              description={productsData[4].title}
              price={productsData[4].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[14].images[0]}
              description={productsData[14].title}
              price={productsData[14].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[15].images[0]}
              description={productsData[15].title}
              price={productsData[15].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[11].images[0]}
              description={productsData[11].title}
              price={productsData[11].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[34].images[0]}
              description={productsData[34].title}
              price={productsData[34].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[36].images[0]}
              description={productsData[36].title}
              price={productsData[36].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[25].images[0]}
              description={productsData[25].title}
              price={productsData[25].price}
            />

            <ProductCard
              loading={loading}
              error={error}
              image={productsData[35].images[0]}
              description={productsData[35].title}
              price={productsData[35].price}
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
