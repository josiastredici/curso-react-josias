import React from 'react';
import '../../index.css'; 

function CartWidget() {
  const cartItems = 5; 

  return (
    <div className="cart-widget">
      <img src="../../shopping-cart.svg" alt='cart-widget'type="button"/>
      <span className="cart-count">{cartItems}</span>
    </div>
  );
}

export default CartWidget;