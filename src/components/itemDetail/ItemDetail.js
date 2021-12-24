import React from 'react';
import '../styles/detail.css';


export const ItemDetail = ({id, name, image, description,price}) => {
  return (
    <>
      <div className='divDet'>

        <div className='divImaDet'>
          <img className='imgDet' src={image} alt={`${id}-${name}`}  />
        </div>
      
        <div className='divNamePriceDet'>

          <h1>{name}</h1>
          
          <div className='divPreBtn'>
            <h2><span>$ </span>{price}</h2>
            <button className='btnAgregarDetail'>Agregar al Carrito</button>
          </div>

        </div>    

      </div> 
      
      <div className='divDesDet'>
        <p className='textDesDet'>{description}</p>
      </div>
    </> 
  );
};
  
