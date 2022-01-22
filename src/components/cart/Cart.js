import React, { useContext } from 'react'
import { CartContext } from '../context/useContext'
import { Link } from 'react-router-dom'
import ItemCart from '../itemCart/ItemCart'

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
                    <h2 className=''>¡El carrito está vacío!</h2>
            
                    <button className=''>
                        <Link to="/">
                            Empezá a comprar
                        </Link>
                    </button>
                </div>
            )}
            {cart.length > 0 && (
                <div>
                    <div className="">
                        <p className=''>Total: $ {total}</p>
                    </div>
                    <button className=''>
                        <Link to="/">
                            Seguir Comprando
                        </Link>
                    </button>
                   
                    <button onClick={() => clear()} >Vaciar Carrito</button>
                </div>
            )}
        </div>
    )
}

export default Cart;



//const Cart = () => {
//
//    const {cart, removeItem, clear} = useContext(CartContext)
//    
//    return (
//        <div>
//
//            <h1>soy un Carrito de compras</h1>
//
//          
//
//            <div className="">
//
//                {cart.map(({item}) =>  
//
//                    <ul className="">
//                        <li>
//                            <span className="">{item.name}</span>
//                            <p> Total: ${item.price} <br></br>
//                                cantidad: 
//                            </p>
//                            <button className="" onClick={() => removeItem()}><i className="">quitar item</i></button>
//                        </li>
//                    </ul>         
//                )}
//                
//                <h3 onClick={() => clear()}>Vaciar Carrito</h3>
//
//            </div>
//
//
//            
//        
//        </div>
//    )
//}
//
//export default Cart
//