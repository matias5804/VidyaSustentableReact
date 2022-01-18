import React from 'react'
import { useState } from 'react';
import '../styles/detail.css';


const ItemCount = ({stock, initial, addItem }) => {
    console.log("Soy promps de ItemCount", stock );
    console.log(initial) ;
    // Voy a Sumar hasta que el numero sea menor o igual que stock
    // Voy a restar hasta que le numero sea mayor o igual hasta el valor inicial (1)
    //Declaro el hook para el contador 

    const[count, setCount] = useState(initial)
    console.log("soy el estado inicial del contador", count);

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

    const onAdd = () => {
        const message = `Agregaste ${count} producto`;
        //utilizo un condicional ternario  (condicional) ? (true) : (false)
        (count === 1) ? alert (message) : alert( `${message}s`);
    };


    return (
        
<>
    <div className='divAddRest'>
        <button onClick= {addItemCont}> +</button>
        <h3>{ count }</h3>
        <button onClick= {quitItemCount} >-</button>
    </div>
    {/** acá es donde tengo el problema que no defino item , en teoria lo traigo desde el Context */}
    <button className='btnAgregarDetail' onClick= {() => addItem ({item, qty})} >Agregar al Carrito</button>
</>
     
    )
}

export default ItemCount
