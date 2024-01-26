import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import './product-page.css';

function ProductPage() {
  const { state } = useLocation();
  const { productsData, productId } = state || {};
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const displayingProduct = productsData.filter((product) => {
      return product.id === productId;
    });
    setProduct(displayingProduct[0]);
  }, [productsData, productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="product-page-container">
        <div className="product-container">
          <div className="product-images">
            {product && (
              <>
                <div className="product-secondary-images">
                  <div
                    className="product-secondary-image"
                    style={{ backgroundImage: `url(${product.images[0]})` }}
                  ></div>
                  <div
                    className="product-secondary-image"
                    style={{ backgroundImage: `url(${product.images[1]})` }}
                  ></div>
                  <div
                    className="product-secondary-image"
                    style={{ backgroundImage: `url(${product.images[2]})` }}
                  ></div>
                </div>
                <div
                  className="product-container-img"
                  style={{ backgroundImage: `url(${product.images[0]})` }}
                ></div>
              </>
            )}
          </div>

          <div className="product-container-info">
            {product && (
              <>
                <div className="category-displayer">
                  {product.category.name}
                </div>
                <div className="title-of-product">{product.title}</div>
                <div className="product-info-description">
                  {product.description}
                </div>
              </>
            )}

            <div className="product-info-rating">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
            <div className="product-info-price-heading">Price</div>
            {product && (
              <div className="product-info-price">{product.price}$</div>
            )}

            <button type="button" className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
