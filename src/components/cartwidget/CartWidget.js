import React ,{ useContext } from 'react'
import logoCarrito from '../../assets/imgLogos/logoCarrito.png';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import { CartContext } from '../context/useContext';
import '../styles/cart.css';


const CartWidget = () => {

    const {cart} = useContext(CartContext);
    let itemsInCart = 0;

    cart.map((item) => {
        itemsInCart = itemsInCart + item.quantity;
        return item;
    });

    return (
        <Link to='../cart/Cart' element={<Cart/>}>
            { cart.length === 0 ? <img className="nav__logo divItemInCart " src={logoCarrito} alt="logoCarrito"/>  
            :
            <div className='divItemInCart'>   
                <div className='itemInCart' style={{ textDecoration: 'none' }} > {itemsInCart}</div>
                <img className="nav__logo" src={logoCarrito} alt="logoCarrito"/>
            </div> }
        </Link>
    );       
}
 
export default CartWidget;