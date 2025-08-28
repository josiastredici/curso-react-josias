import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import '../../index.css';
import brand from '../../assets/logo ps.svg';

function NavBar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={brand} alt="Logo PlayStation Store" />
      </a>
      <div className="logo">
        <h1>PlayStation Store</h1>
      </div>
      <div className="categories">
        <ul>
          <li><a href="/categoria/accion">Juegos de Acción</a></li>
          <li><a href="/categoria/deporte">Juegos de Deporte</a></li>
          <li><a href="/categoria/aventura">Juegos de Aventura</a></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
