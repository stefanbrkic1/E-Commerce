import { useEffect, useRef, useState } from 'react';
import '../PopularItems/popular-items.css';
import './related-items.css';
import ProductCard from '../ProductCard/ProductCard';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function RelatedItems({ productsData, loading, error, category }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [relatedItems, setRelatedItems] = useState(null);

  useEffect(() => {
    function goToProductPage(productId) {
      navigate('/product', {
        state: { productsData: productsData, productId: productId },
      });
    }

    const productsByCategory = productsData
      .filter((product) => product.category.name === category)
      .map((product) => {
        return (
          <ProductCard
            key={product.id}
            loading={loading}
            error={error}
            image={product.images[0]}
            description={product.title}
            price={product.price}
            goToProductPage={() => goToProductPage(product.id)}
          />
        );
      });
    setRelatedItems(productsByCategory);
  }, [productsData, category, loading, error, navigate]);

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
    <section className="related-items-container">
      <h2 className="popular-heading">RELATED ITEMS</h2>
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
        {/*Related Items */}
        {productsData && productsData.length > 0 && relatedItems}
      </div>
    </section>
  );
}

RelatedItems.propTypes = {
  productsData: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.string,
  category: PropTypes.string,
};

export default RelatedItems;
