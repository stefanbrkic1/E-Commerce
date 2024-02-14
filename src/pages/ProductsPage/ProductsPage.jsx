import './products-page.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductsPage() {
  const navigate = useNavigate();
  const { productsData, loading, error } = useSelector(
    (state) => state.products,
  );
  const { category } = useParams();
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

  function goToProductPage(productId) {
    navigate(`/product/${productId}`);
  }

  function goToProductsPage() {
    navigate('/products/all-products');
  }

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar goToProductsPage={goToProductsPage} />
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
                  goToProductPage={() => goToProductPage(product.id)}
                />
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductsPage;
