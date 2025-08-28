import React from 'react';
import '../../index.css';
import './assets/item-list-container.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import { getAllJuegos, getJuegosByCategory } from '../../asyncMock';

function ItemListContainer({ tituloPagina }) {
  const [juegos, setJuegos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const asyncFunc = categoria ? getJuegosByCategory : getAllJuegos;
    asyncFunc(categoria)
      .then(response => {
        setJuegos(response);
      })
      .catch(error => {
        console.error(error);
      })
  }, [categoria]);

  return (
    <div className="item-list-container">
        <div className="item-list-content">
            <h1>{tituloPagina}</h1>
            { categoria && <h2 className="item-list-category">Juegos de {categoria}</h2> }
            <ItemList juegos={juegos}/>
        </div>
    </div>
  );
}

export default ItemListContainer;
