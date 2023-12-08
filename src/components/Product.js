import React from 'react';
import './Product.css';

const Product = ({ name, image, description }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Product;
