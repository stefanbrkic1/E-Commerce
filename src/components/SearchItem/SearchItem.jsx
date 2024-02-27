import { useNavigate } from 'react-router-dom';
import './search-item.css';
import PropTypes from 'prop-types';

function SearchItem({ product }) {
  const navigate = useNavigate();
  return (
    <div
      className="search-item"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="search-item-left">
        <h4>{product.title}</h4>
        <div>{product.price}$</div>
      </div>
      <div className="search-item-right">
        <div
          className="search-item-img"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        ></div>
      </div>
    </div>
  );
}

SearchItem.propTypes = {
  product: PropTypes.any.isRequired,
};

export default SearchItem;
