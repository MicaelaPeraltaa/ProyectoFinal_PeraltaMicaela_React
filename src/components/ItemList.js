import React from 'react';
import Product from './Product';
import './ItemList.css';

const products = [
    {
        id: 1,
        name: 'Juguete para perros',
        image: '/public/imagenes/jugueteperro.jpeg',
        description: 'Un juguete divertido para entretener a tu perro.'
      },
      {
        id: 2,
        name: 'Comida para gatos',
        image: '/public/imagenes/comidagato.jpeg',
        description: 'Una deliciosa comida para satisfacer el apetito de tu gato.'
      },
      {
        id: 1,
        name: 'Collar para perro',
        image: '/public/imagenes/collar.jpeg',
        description: 'Collar ajustable para perros de todas las razas.',
      },
      {
        id: 2,
        name: 'Juguete para gato',
        image: '/public/imagenes/gatojuguete.jpeg',
        description: 'Juguete interactivo para gatos con plumas y campana.',
      },
      {
        id: 3,
        name: 'Comedero automático',
        image: '/public/imagenes/comida.jpeg',
        description: 'Comedero automático para perros y gatos con temporizador.',
      },
];

const ItemList = () => {
  return (
    <div className="item-list">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ItemList;
