import '../styles/products-page.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ProductsPage() {
  const { state } = useLocation();
  const { productsData, loading, error, category } = state || {};
  const [productsCategory, setProductsCategory] = useState(
    category || 'all-products',
  );
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    if (productsCategory === 'all-products') {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter((product) => {
        return product.category.id === getCategoryId(productsCategory);
      });
      setFilteredProducts(filtered);
    }
  }, [productsCategory, productsData]);

  // Get category id to filter the products
  function getCategoryId(category) {
    let id;
    if (category === 'electronics') {
      id = 2;
    }
    if (category === 'clothes') {
      id = 1;
    }
    if (category === 'furniture') {
      id = 3;
    }
    if (category === 'shoes') {
      id = 4;
    }
    if (category === 'miscellaneous') {
      id = 5;
    }
    return id;
  }

  function handleCategoryChange(e) {
    const selectedCategory = e.target.value;
    setProductsCategory(selectedCategory);
  }

  return (
    <>
      <Navbar />
      <section className="products-container">
        <div className="products-top">
          <h2 className="products-header">PRODUCTS</h2>
          <div className="products-filter-container">
            <select
              name="categoryDropdown"
              id="categoryDropdown"
              className="categories"
              value={productsCategory}
              onChange={(e) => handleCategoryChange(e)}
            >
              <option value="all-products">All Products</option>
              <option value="electronics">Electronics</option>
              <option value="clothes">Clothes</option>
              <option value="furniture">Furniture</option>
              <option value="shoes">Shoes</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>
          </div>
        </div>

        <div className="products">
          {productsData &&
            productsData.length !== 0 &&
            filteredProducts.map((product) => {
              return (
                <Product
                  key={product.id}
                  loading={loading}
                  error={error}
                  image={product.images[0]}
                  description={product.title}
                  price={product.price}
                />
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
}

ProductsPage.propTypes = {
  productsData: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.string,
  category: PropTypes.string,
};

export default ProductsPage;
