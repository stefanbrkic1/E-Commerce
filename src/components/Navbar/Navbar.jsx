import './navbar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

function Navbar({ goToProductsPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>

      <div className="navbar-middle">
        <Link to="/" className="logo"></Link>
      </div>

      <div className="navbar-right">
        <div className="products-link" onClick={goToProductsPage}>
          SHOP NOW
        </div>

        <button type="button" className="user-btn">
          <div className="user-icon"></div>
        </button>

        <Cart />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  goToProductsPage: PropTypes.func,
};

export default Navbar;
