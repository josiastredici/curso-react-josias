import React, { useContext } from 'react';
import '../../../index.css'; 
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import cart from './assets/shopping-cart.svg';

function CartWidget() {

  const { gamesQuantity } = useContext(CartContext);

  return (
    <Link to="/carrito" className="cart-widget">
      <img src={cart} alt='cart-widget'type="button"/>
      <span className="cart-count">{gamesQuantity()}</span>
    </Link>
  );
}

export default CartWidget;