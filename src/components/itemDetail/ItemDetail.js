import React from 'react';
import '../styles/styles.css';

export const ItemDetail = ({id, name, image, description,price}) => {
  return (
    <>
      
        <img src={image} alt={`${id}-${name}`}  />
        <section >
          <h1>{name}</h1>
          <p>{description}</p>
          <h2>el precio es $ {price}</h2>
        </section>
     
    </> 
  );
};
  