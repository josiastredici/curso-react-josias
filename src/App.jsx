import React, { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'; 
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';


function App() {
  // const greetingMessage = "Bienvenidos a la tienda oficial de PlayStation";

  // useEffect(() =>{
  //   getItems();
  // },[])

  return (
    <div className="App">
      <BrowserRouter>
       <CartProvider>
        <NavBar />
        <Home/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer tituloPagina={'Todos los juegos'}/>} />
          <Route path='/categoria/:categoria' element={<ItemListContainer tituloPagina={'Juegos por categoría'}/>} />
          <Route path='/juego/:juegoId' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h4>404 NOT FOUND</h4>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
