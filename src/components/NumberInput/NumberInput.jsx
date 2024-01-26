import { useState } from 'react';
import './number-input.css';

function NumberInput() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  return (
    <div className="number-input-container">
      <div className="number-increment" onClick={increment}>
        <div className="increment-sign"></div>
      </div>
      <div className="number-input">{quantity}</div>
      <div className="number-decrement" onClick={decrement}>
        <div className="decrement-sign"></div>
      </div>
    </div>
  );
}

export default NumberInput;
