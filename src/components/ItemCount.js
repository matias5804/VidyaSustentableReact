import React from 'react'
import { useState } from 'react';

const ItemCount = ({stock, initial}) => {
    console.log("Soy promps de ItemCount", stock );
    console.log(initial) ;
    // Voy a Sumar hasta que el numero sea menor o igual que stock
    // Voy a restar hasta que le numero sea mayor o igual hasta el valor inicial (1)
    //Declaro el hook para el contador 

    const[count, setCount] = useState(initial)
    console.log("soy el estado inicial del contador", count);

    const addItem = () => {
       const newValue = count + 1;
       if(newValue <= stock ){
           setCount(newValue);
       };
    };

    const quitItem = () => {
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

        <div>
            <h1>voy a ser el contador</h1>
            <div>
                <button onClick= {addItem}> +</button>
                <h3>{ count }</h3>
                <button onClick= {quitItem} >-</button>
            </div>
            <button onClick= {onAdd} >Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
