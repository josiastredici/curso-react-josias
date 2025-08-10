import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import '../../index.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <a href="">
      <img src="../../logo ps.svg" alt="" /></a>
      <div className="logo">
        <h1>PlayStation Store</h1>
      </div>
      <div className="categories">
        <ul>
          <li><a href="/consoles">Consolas</a></li>
          <li><a href="/joysticks">Joysticks</a></li>
          <li><a href="/accessories">Accesorios</a></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
