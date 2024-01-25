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

function Product({ loading, error, image, description, price }) {
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
      <div className="product-image-container">
        {content}
        <button type="button" className="card-btn">
          Details
        </button>
      </div>

      <div className="product-bottom">
        <div className="product-short-description">{description}</div>
        <div>
          <div className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            eum ad!
          </div>
          <div className="product-price">{price}$</div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
