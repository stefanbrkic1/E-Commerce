import './product.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 80ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

function Product({
  loading,
  error,
  image,
  description,
  price,
  goToProductPage,
}) {
  let content;
  if (loading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>There is an error with fetching the image</div>;
  } else {
    content = <ProductImage image={image}></ProductImage>;
  }
  return (
    <div className="product">
      <div className="product-image-container" onClick={goToProductPage}>
        {content}
        <button type="button" className="card-btn">
          Details
        </button>
      </div>

      <div className="product-price-popular">{price}$</div>
      <div className="product-short-description">{description}</div>
    </div>
  );
}

Product.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  goToProductPage: PropTypes.func,
};

export default Product;
