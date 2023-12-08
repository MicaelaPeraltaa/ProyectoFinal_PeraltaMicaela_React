import React from 'react';
import ItemList from './ItemList';
import './ItemList.css';

const ItemListContainer = () => {
  return (
    <div className="container">
      <h2>Catálogo de productos para mascotas</h2>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
