import React from 'react';

const ItemQuantitySelector = () => {
  return (
    <div className="quantity-selector">
      <label>Cantidad:</label>
      <input type="number" defaultValue="1" min="1" />
    </div>
  );
};

export default ItemQuantitySelector;
