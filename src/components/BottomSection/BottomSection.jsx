import './bottom-section.css';

function BottomSection() {
  return (
    <section className="bottom-section-container">
      <div className="shipping">
        <div className="shipping-header">WORLD - WIDE SHIPPING</div>
        <div className="shipping-text">
          All deliveries are shipped from our warehouse in Serbia and Germany to
          your delivery address. Estimated transit time after dispatch: Europe:
          1 to 7 working days, Other Countries: 5 to 15 working days.
        </div>
      </div>
      <div className="shipping">
        <div className="shipping-header">TEAM SUPPORT 24/7</div>
        <div className="shipping-text">
          If you have any questions at any time, you can contact our customer
          service, and we will respond to you as soon as possible.
          info@shopingcommerce.com
        </div>
      </div>
    </section>
  );
}

export default BottomSection;
