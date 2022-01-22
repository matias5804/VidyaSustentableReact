import React,{ useContext}  from 'react';
import '../styles/detail.css';
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../context/useContext';


export const ItemDetail = ({item}) => {

  const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }


  return (
    <>
      <div className='divDet'>

        <div className='divImaDet'>
          <img className='imgDet' src={item.image} alt={`${item.id}-${item.name}`}  />
        </div>
      
        <div className='divNamePriceDet'>

          <h1>{item.name}</h1>
          
          <div className='divPreBtn'>
            <h2><span>$ </span>{item.price}</h2>
            <ItemCount  item={item.id} stock={5} initial={1} onAdd={onAdd} />
          </div>

        </div>    

      </div> 
      
      <div className='divDesDet'>
        <p className='textDesDet'>{item.description}</p>
      </div>
    </> 
  );
};
  
