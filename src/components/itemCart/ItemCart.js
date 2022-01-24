import React from 'react'
import '../styles/cart.css';


const ItemCart = ( { productos, removeItem }) => {
    return (
        <div className='divPoductCart' id={productos.item.id} >
           
            <div >
                <button className='btnEliminar' onClick={() => removeItem(productos.item.id)}>
                X
                </button>
            </div>

            <div >
                <img src={productos.item.image} className='imgCart' alt={productos.item.nombre}></img>
            </div>
            
            <div  className='nomItemCart'>
                {productos.item.name} x {productos.quantity}
            </div>

            <div className='priceItemCart'>
                $ {productos.item.price * productos.quantity}
            </div>
            
        </div>
    )
}

export default ItemCart;