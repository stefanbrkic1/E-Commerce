import './product-page.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import RelatedItems from '../../components/RelatedItems/RelatedItems';
import NumberInput from '../../components/NumberInput/NumberInput';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../app/reducers/cartSlice';

function ProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsData, loading, error } = useSelector(
    (state) => state.products,
  );
  const { cartItems } = useSelector((state) => state.cart);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const displayingProduct = productsData.find((product) => {
      return product.id === Number(productId);
    });
    setProduct(displayingProduct);
  }, [productsData, productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function goToProductsPage() {
    navigate('/products/all-products');
  }

  function addToCart() {
    const productIsInCart = cartItems.find(
      (productInCart) => productInCart.id === product.id,
    );

    if (productIsInCart) {
      const modifiedQuantity = cartItems.map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...product, quantity: productInCart.quantity + quantity };
        } else {
          return productInCart;
        }
      });
      dispatch(setCartItems(modifiedQuantity));
    } else {
      dispatch(setCartItems([...cartItems, { ...product, quantity }]));
    }
  }

  return (
    <>
      <Navbar goToProductsPage={goToProductsPage} />
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

export default ProductPage;
