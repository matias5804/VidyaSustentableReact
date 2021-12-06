import React from 'react'
import CartWidget from './CartWidget'
import '../styles/NavBar.css'
import logoHorizontal from '../../assets/img/logoHorizontal.png';


const NavBar = () => {
    return (
        <div className="divNav">
        
            <div className="nav__divBrand">
                <a href="index.html" className="nav__brandLink">
                    <img className="nav__brand" src={logoHorizontal} alt="logo"/>
                </a>
            </div>

            <ul className="nav__container">
                <li className="nav__item">
                    <h1 > TIENDA </h1>
                </li>
                <li className="nav__item">
                    <h1> NOSOTROS </h1> 
                </li>
                <li className="nav__item">
                    <h1 > CONTACTO </h1>
                </li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar
