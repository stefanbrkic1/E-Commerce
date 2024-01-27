import './product-page.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import RelatedItems from '../../components/RelatedItems/RelatedItems';
import NumberInput from '../../components/NumberInput/NumberInput';

function ProductPage({
  productsData,
  loading,
  error,
  cartItems,
  setCartItems,
}) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { productId } = state || {};
  const [product, setProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const displayingProduct = productsData.filter((product) => {
      return product.id === productId;
    });
    setProduct(displayingProduct[0]);
  }, [productsData, productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function goToProductsPage() {
    navigate('/products', {
      state: { productsData, loading, error },
    });
  }

  function addToCart() {
    const productIsInCart = cartItems.find(
      (productInCart) => productInCart.id === product.id,
    );

    if (productIsInCart) {
      const modifiedQuantity = cartItems.map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...product, quantity: (productInCart.quantity += quantity) };
        } else {
          return productInCart;
        }
      });
      setCartItems(modifiedQuantity);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  }

  return (
    <>
      <Navbar
        goToProductsPage={goToProductsPage}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <div className="product-page-container">
        <div className="product-container">
          <div className="product-images">
            {product && (
              <>
                <div className="product-secondary-images">
                  <div
                    className="product-secondary-image"
                    style={{ backgroundImage: `url(${product.images[0]})` }}
                    onClick={() => setImageIndex(0)}
                  ></div>
                  <div
                    className="product-secondary-image"
                    style={{ backgroundImage: `url(${product.images[1]})` }}
                    onClick={() => setImageIndex(1)}
                  ></div>
                  <div
                    className="product-secondary-image"
                    style={{ backgroundImage: `url(${product.images[2]})` }}
                    onClick={() => setImageIndex(2)}
                  ></div>
                </div>
                <div
                  className="product-container-img"
                  style={{
                    backgroundImage: `url(${product.images[imageIndex]})`,
                  }}
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
            <div className="product-info-quantity-heading">Quantity</div>
            <div className="product-cart-adder">
              <NumberInput quantity={quantity} setQuantity={setQuantity} />
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {product && (
        <RelatedItems
          productsData={productsData}
          loading={loading}
          error={error}
          category={product.category.name}
          goToProductsPage={goToProductsPage}
        />
      )}
      <Footer />
    </>
  );
}

ProductPage.propTypes = {
  productsData: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.string,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

export default ProductPage;
