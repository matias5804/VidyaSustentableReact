import React, { useContext }from 'react'
import logoCarrito from '../../assets/imgLogos/logoCarrito.png';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import { CartContext } from '../context/useContext';


const CartWidget = () => {

    const { addedProducts} = useContext(CartContext)


    let itemsInCart = 0;

    addedProducts.map((item) => {
        itemsInCart = itemsInCart + item.quantyti;
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
