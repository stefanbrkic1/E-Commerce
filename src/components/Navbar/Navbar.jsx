import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>

      <div className="navbar-middle">
        <div className="logo"></div>
      </div>

      <div className="navbar-right">
        <div className="products-link">SHOP NOW</div>

        <button type="button" className="user-btn">
          <div className="user-icon"></div>
        </button>

        <button type="button" className="cart-btn">
          <div className="cart-icon"></div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
