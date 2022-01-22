import React,{ useContext } from 'react'
import { useState } from 'react';
import '../styles/detail.css';
import { CartContext } from '../context/useContext';

const ItemCount = ({stock, initial,onAdd }) => {
 
    // Voy a Sumar hasta que el numero sea menor o igual que stock
    // Voy a restar hasta que le numero sea mayor o igual hasta el valor inicial (1)
    //Declaro el hook para el contador 
    
    const[count, setCount] = useState(initial)
    const {addItem} = useContext(CartContext)

    const addItemCont = () => {
       const newValue = count + 1;
       if(newValue <= stock ){
           setCount(newValue);
       };
    };

    const quitItemCount = () => {
        const newValue = count - 1;
        if(newValue >= initial) {
            setCount(newValue);
        };
    };

    //const onAdd = () => {
    //    const message = `Agregaste ${count} producto`;
    //    //utilizo un condicional ternario  (condicional) ? (true) : (false)
    //    (count === 1) ? alert (message) : alert( `${message}s`);
    //};


    return (
        
        <>
            <div className='divAddRest'>
                <button onClick= {addItemCont}> +</button>
                <h3>{ count }</h3>
                <button onClick= {quitItemCount} >-</button>
            </div>
        
            <button className='btnAgregarDetail' onClick= {() => onAdd (addItem)} >Agregar al Carrito</button>

        </>
     
    )
}

export default ItemCount
