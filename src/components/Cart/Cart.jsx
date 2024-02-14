import { useState, useMemo } from 'react';
import './cart.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../app/reducers/cartSlice';

const CartSidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100svh;
  width: 430px;
  background-color: var(--background-color);
  z-index: 999;
  transition: 0.3s ease;
  transform: ${({ isCartActive }) =>
    isCartActive ? 'translateX(0)' : 'translateX(100%)'};

  /* Phones */
  @media only screen and (max-width: 767px) {
    width: 100vw;
  }
`;

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [isCartActive, setIsCartActive] = useState(false);

  function openCart() {
    setIsCartActive(true);
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    setIsCartActive(false);
    document.body.style.overflow = 'auto';
  }

  const numberOfItemsInCart = useMemo(
    () => cartItems.reduce((sum, product) => (sum += product.quantity), 0),
    [cartItems],
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (sum, product) => (sum += product.quantity * product.price),
        0,
      ),
    [cartItems],
  );

  function removeProduct(productId) {
    const updatedCartItems = cartItems.filter(
      (product) => product.id !== productId,
    );
    dispatch(setCartItems(updatedCartItems));
  }

  return (
    <>
      <button type="button" className="cart-btn" onClick={openCart}>
        <span className="cart-items-length">{numberOfItemsInCart}</span>
      </button>

      <CartSidebar isCartActive={isCartActive}>
        <div className="cart-top">
          <div className="cart-heading">
            <div className="cart-icon"></div>
            <div className="cart-text">CART</div>
          </div>
          <div className="cart-exit" onClick={closeCart}></div>
        </div>

        {cartItems.length === 0 && (
          <div className="cart-items-empty">YOUR CART IS EMPTY</div>
        )}

        <div className="cart-items-container">
          <div className="cart-items">
            {cartItems.length > 0 &&
              cartItems.map((product) => {
                return (
                  <div key={product.id} className="cart-product">
                    <div className="cart-product-left">
                      <button
                        className="cart-delete-btn"
                        onClick={() => removeProduct(product.id)}
                      ></button>
                      <div className="cart-product-text">
                        <div className="cart-product-title">
                          {product.title}
                        </div>
                        <div className="cart-product-price">
                          {product.price}$
                        </div>
                      </div>
                    </div>
                    <div className="cart-product-right">
                      <div className="quantity-displayer">
                        x{product.quantity}
                      </div>
                      <div
                        className="cart-product-img"
                        style={{ backgroundImage: `url(${product.images[0]})` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="cart-checkout-container">
            <div className="checkout-total">
              <div>Total:</div>
              <div>{totalPrice}$</div>
            </div>
            <button type="button" className="checkout-btn">
              CHECKOUT
            </button>
          </div>
        </div>
      </CartSidebar>
      {isCartActive && <div className="overlay"></div>}
    </>
  );
}

export default Cart;
