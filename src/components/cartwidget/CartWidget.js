import React from 'react'
import logoCarrito from '../../assets/imgLogos/logoCarrito.png';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import { useContext } from 'react/cjs/react.production.min';
import { CartContext } from '../context/useContext';


const CartWidget = () => {

    const { items } = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.qty;
    })

    return (
        <div>
            <div>
                {itemsInCart}
            </div>
           <Link to='../cart/Cart' element={<Cart/>}>
                <img className="nav__logo" src={logoCarrito} alt="logoCarrito"/>
           </Link>
          
        </div>
    )
}

export default CartWidget
