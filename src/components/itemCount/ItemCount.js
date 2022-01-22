import React from 'react'
import { useState } from 'react';
import '../styles/detail.css';


const ItemCount = ({stock, initial,onAdd }) => {
 
    // Voy a Sumar hasta que el numero sea menor o igual que stock
    // Voy a restar hasta que le numero sea mayor o igual hasta el valor inicial (1)
    //Declaro el hook para el contador 
    
    const[quantity, setQuantity] = useState(initial)
    

    const addItemCont = () => {
       const newValue = quantity + 1;
       if(newValue <= stock ){
           setQuantity(newValue);
       };
    };

    const quitItemquantity = () => {
        const newValue = quantity - 1;
        if(newValue >= initial) {
            setQuantity(newValue);
        };
    };

    const onAddMensaje = () => {
        const message = `Agregaste ${quantity} producto`;
        //utilizo un condicional ternario  (condicional) ? (true) : (false)
        (quantity === 1) ? alert (message) : alert( `${message}s`);
    };

    const addToCart = () => {
        onAdd(quantity);
        //setQuantity(1);
        //setChangeBtn(false);
        //setStockItems(stockItems - quantity);
        onAddMensaje()
    };


    return (
        
        <>
            <div className='divAddRest'>
                <button onClick= {addItemCont}> +</button>
                <h3>{ quantity }</h3>
                <button onClick= {quitItemquantity} >-</button>
            </div>
            <button className='btnAgregarDetail' onClick= {addToCart} >Agregar al Carrito</button>

        </>
     
    )
}

export default ItemCount
