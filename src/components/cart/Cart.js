import React, { useContext } from 'react'
import { CartContext } from '../context/useContext'
import { Link } from 'react-router-dom'
import ItemCart from '../itemCart/ItemCart'
import '../styles/cart.css';

const Cart = () => {

    const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext)
    const total = getTotalPrice();

    return (

        <div className="">
            <h1 className='tituloCarrito'>- CARRITO DE COMPRAS -</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((prod) => {
                    return <ItemCart
                        key={prod.item.id}
                        productos={prod}
                        removeItem={removeItem}
                    />
                    })}
                </div>
            ) : (

            
                <button className='btnSeguirCarrito'>
                    <Link to="/">
                        ¡Empezá a comprar!
                    </Link>
                </button>

            )}
            {cart.length > 0 && (

                <div className='divTotalSeguirVaciar'>

                    <button className='btnSeguirCarrito'>
                        <Link to="/">
                            Seguir Comprando
                        </Link>
                    </button>
                    
                    <button className='btnVaciarCarrito' onClick={() => clear()} >Vaciar Carrito</button>
                   
                    <div className="txtTotalCarrito">
                        <p className=''>Total: $ {total}</p>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Cart;
