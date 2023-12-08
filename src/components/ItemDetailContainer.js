import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const productDetails = {
    // Detalles del producto aquí
  };

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <ItemDetail details={productDetails} />
    </div>
  );
};

export default ItemDetailContainer;
