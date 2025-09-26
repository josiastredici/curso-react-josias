import React from 'react';
import CartWidget from '../NavBar/CartWidget/CartWidget';
import '../../index.css';
import brand from '../../assets/logo ps.svg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <img src={brand} alt="Logo PlayStation Store" />
      </NavLink>
      <div className="logo">
        <h1>PlayStation Store</h1>
      </div>
      <div className="categories">
        <ul>
          <li><NavLink to="/categoria/accion">Juegos de Acción</NavLink></li>
          <li><NavLink to="/categoria/deporte">Juegos de Deporte</NavLink></li>
          <li><NavLink to="/categoria/aventura">Juegos de Aventura</NavLink></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
