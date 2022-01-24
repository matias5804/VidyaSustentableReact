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
                <div>
                    <h2 className='txtCarritoVacio'>¡El carrito está vacío!</h2>
            
                    <button className='btnSeguirCarrito'>
                        <Link to="/">
                            ¡Empezá a comprar!
                        </Link>
                    </button>
                </div>
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
