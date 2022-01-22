

import React ,{ useContext } from 'react'
import logoCarrito from '../../assets/imgLogos/logoCarrito.png';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import { CartContext } from '../context/useContext';


const CartWidget = () => {
    const {cart} = useContext(CartContext);

    let itemsInCart = 0;

    cart.map((item) => {
        itemsInCart = itemsInCart + item.quantity;
        return item;
    });

    return (
        <Link to='../cart/Cart' element={<Cart/>}>
            {cart.length === 0 ? <img className="nav__logo" src={logoCarrito} alt="logoCarrito"/>  : <>
            <img className="nav__logo" src={logoCarrito} alt="logoCarrito"/>
            <> {itemsInCart}</>
            </> }
        </Link>
    );       
}
 
export default CartWidget;