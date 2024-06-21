import './navbar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchItem from '../SearchItem/SearchItem';

function Navbar({ goToProductsPage }) {
  const { productsData } = useSelector((state) => state.products);
  const [searchText, setSearchText] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const regex = new RegExp(searchText, 'i');

    if (productsData) {
      const filtered = productsData.filter((product) =>
        regex.test(product.title),
      );
      setSearchedProducts(filtered);
    }
  }, [searchText, productsData]);

  return (
    <>
      <nav className="navbar-container">
        <div className="top-bar">
          GET OUR BEST DEALS ON THIS LUNAR YEAR <span>30% FLAT OFF</span>
        </div>
        <div className="navbar">
          <div className="navbar-left">
            <div className="search-bar-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="search-results-container">
                {searchText !== '' &&
                  searchedProducts.length > 0 &&
                  searchedProducts.map((product) => (
                    <SearchItem key={product.id} product={product} />
                  ))}
              </div>
            </div>
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
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  goToProductsPage: PropTypes.func,
};

export default Navbar;
