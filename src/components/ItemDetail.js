import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ details }) => {
  const { name, image, description, price } = details;

  return (
    <div className="item-detail">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <ItemQuantitySelector />
      <Description />
      <AddItemButton />
    </div>
  );
};

export default ItemDetail;
