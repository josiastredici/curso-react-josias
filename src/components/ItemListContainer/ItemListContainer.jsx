import React from 'react';
import '../../index.css';
function ItemListContainer({ greetingMessage }) {
  return (
    <div className="item-list-container">
      <h2>{greetingMessage}</h2>      
    </div>
  );
}

export default ItemListContainer;
