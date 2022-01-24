import React from 'react'
import { useState } from 'react';
import '../styles/detail.css';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';


const ItemCount = ({stock, initial,onAdd }) => {
 
    const[quantity, setQuantity] = useState(initial)
    const [changeBtn, setChangeBtn] = useState(true);

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
        (quantity === 1) ? alert (message) : alert( `${message}s`);
    };

    const addToCart = () => {
        onAdd(quantity);
        setChangeBtn(false);
        onAddMensaje()
    };


    return (
        
        <>
            <div className='divAddRest'>

                <button className='btnCount' onClick= {addItemCont}> +</button>

                <h3 className='numCount'>{ quantity }</h3>

                <button className='btnCount' onClick= {quitItemquantity} >-</button>
                
            </div>

            { changeBtn ?

                <button className='btnAgregarDetail' onClick= {addToCart} >Agregar al Carrito</button>
                :
                <div>
                    <button className='btnAgregarDetail' onClick = {addToCart}>Agregar al Carrito</button><br/>

                    <Link  to= "/">
                        <button className='btnAgregarDetail' >Seguir Comprando</button><br/>
                    </Link>
                
                    <Link to= "../cart/Cart" element={<Cart/>} >
                        <button className='btnAgregarDetail' >Terminar Compra</button>
                    </Link>
                </div>
            }
        </>
     
    )
}

export default ItemCount
