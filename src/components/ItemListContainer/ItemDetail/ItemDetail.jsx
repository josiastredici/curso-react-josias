import './assets/item-detail.css'
import React from "react";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({id, title, category, img, price, stock, description}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = {
            id, title, price
        };
        addItem(item, quantity);
    };

    return (
        <article className="game-detail">
          <div className="game-title">
              <h2>{title}</h2>
          </div>
          <div className="cont-stack">
            <div className="game-picture">
              <picture >
                <img src={img} alt={title}/>
              </picture>
            </div>
            <div className="game-info">
              <section>
                <p><span>Precio:</span> {price} ARS</p>
                <p><span>Stock disponible:</span> {stock}</p>
                <p><span>Categoría:</span> {category}</p>
                <p><span>Descripción:</span> {description}</p>
              </section>
            </div>
            <div className="game-counter">
              {
                quantityAdded > 0 ? (
                  <div className="game-checkout">
                    <Link to="/carrito" className="option btn-checkout">Terminar compra</Link>
                  </div>
                ) : (
                  <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
              }
            </div>
          </div>
        </article>
    );
}
export default ItemDetail;