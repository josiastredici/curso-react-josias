import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'; 
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const greetingMessage = "Bienvenidos a la tienda oficial de PlayStation";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetingMessage={greetingMessage}/>
      <Home/>
    </div>
  );
}

export default App;
