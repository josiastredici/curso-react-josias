import './assets/item-detail.css'
import React from "react";

const ItemDetail = ({id, title, category, img, price, stock, description}) => {
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
          </div>
        </article>
    );
}
export default ItemDetail;