import './quotes-section.css';

function QuotesSection() {
  return (
    <section className="quotes-container">
      <div className="quotes-section">
        <h2 className="quotes-header">QUOTES</h2>
        <div className="quotes">
          <div className="quote-card">
            <div className="quote-img-container">
              <div className="quote-img person1"></div>
            </div>
            <div className="quote-text-container">
              <div className="person-name">Isabella Thompson</div>
              <div className="quote-text">
                Elevate your lifestyle with Shoping Commerce. Our collection
                caters to diverse tastes, from fashion-forward apparel to
                cutting-edge tech gadgets. Explore, discover, and confidently
                say, This is me.
              </div>
            </div>
          </div>

          <div className="quote-card">
            <div className="quote-img-container">
              <div className="quote-img person2"></div>
            </div>
            <div className="quote-text-container">
              <div className="person-name">Ethan Mitchell</div>
              <div className="quote-text">
                Step into a world of curated choices. We believe in making every
                purchase a statement of your unique style. From fashion to tech
                and everything in between, Shoping Commerce celebrates your
                individuality with each carefully selected product.
              </div>
            </div>
          </div>

          <div className="quote-card">
            <div className="quote-img-container">
              <div className="quote-img person3"></div>
            </div>
            <div className="quote-text-container">
              <div className="person-name">Oliver Reynolds</div>
              <div className="quote-text">
                At Shoping Commerce, every purchase is a journey into quality
                and uniqueness. Discover a world of curated choices that reflect
                your individuality and style. Embrace the joy of endless
                possibilities!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuotesSection;
