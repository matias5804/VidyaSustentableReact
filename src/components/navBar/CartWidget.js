import React from 'react'
import logoCarrito from '../../assets/img/logoCarrito.png';

const CartWidget = () => {
    return (
        <div>
            <img className="nav__logo" src={logoCarrito} alt="logoCarrito"/>
        </div>
    )
}

export default CartWidget
