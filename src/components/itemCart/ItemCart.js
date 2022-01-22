import React from 'react'
import '../styles/cart.css';


const ItemCart = ( { productos, removeItem }) => {
    return (
        <div className='' id={productos.item.id} >
            <div className='divPoductCart'>
                <div >
                    <button className='' onClick={() => removeItem(productos.item.id)}>
                    eliminar
                    </button>
                </div>

                <div >
                
                    <img src={productos.item.image} className='imgCart' alt={productos.item.nombre}></img>
                   
                </div>
                
                <div  className=''>
                    {productos.item.name} x {productos.quantity}
                </div>

                <div className=''>
                    $ {productos.item.price * productos.quantity}
                </div>
            </div>
        </div>
    )
}

export default ItemCart;