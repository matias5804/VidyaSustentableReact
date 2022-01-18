import React from 'react';
import '../styles/detail.css';
import ItemCount from '../itemCount/ItemCount';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../context/useContext';


export const ItemDetail = ({id, name, image, description, price}) => {

  const {addItem} = useContext(CartContext)

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
            <ItemCount item={id} stock={5} initial={1} onAdd={addItem} />
          </div>

        </div>    

      </div> 
      
      <div className='divDesDet'>
        <p className='textDesDet'>{description}</p>
      </div>
    </> 
  );
};
  
