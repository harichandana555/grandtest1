
import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <div className="items">
        <div className="item">
          <div className="item-details">
            <div className="item-name">Apple Juice</div>
            <div className="item-quantity">250ml</div>
          </div>
          <div className="item-quantity">
            <span>+</span>
            <span>2</span>
            <span>+</span>
            <span>1</span>
          </div>
        </div>
        <div className="sub-total">Sub-Total 2 items</div>
      </div>
      <div className="actions">
        <div className="remove-all">Remove all</div>
        <div className="price">Rs. 250</div>
        <div className="save-for-later">Save for later</div>
        <div className="price">Rs. 500</div>
        <div className="checkout">Checkout</div>
      </div>
    </div>
  );
};

export default ShoppingCart;