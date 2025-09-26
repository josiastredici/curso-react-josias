import React from 'react';
import '../../index.css';
import './assets/item-list-container.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function ItemListContainer({ tituloPagina }) {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const games = collection(db, 'items');
    const collectionRef = categoria ? query(games, where('category', '==', categoria)) : games;
    getDocs(collectionRef)
      .then(response =>{
        const productAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setJuegos(productAdapted);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoria]);

  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

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
