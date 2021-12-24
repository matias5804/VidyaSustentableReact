import React from 'react';
import CartWidget from '../cartwidget/CartWidget';
import '../styles/navBar.css';
import logoHorizontal from '../../assets/imgLogos/logoHorizontal.png';
import { Link} from 'react-router-dom';





const NavBar = () => {
    return (
        <div className="divNav">
        
            <div className="nav__divBrand">
                <Link to="/" className="nav__brandLink">
                    <img className="nav__brand" src={logoHorizontal} alt="logo"/>
                </Link>
            </div>

                <ul className="nav__container">
                    <li className="nav__item">
                        <h2> TIENDA </h2>
                    </li>
                    <li className="nav__item">
                        <h2> NOSOTROS </h2> 
                    </li>
                    <li className="nav__item">
                        <h2> CONTACTO </h2>
                    </li>
                </ul>
            

            <CartWidget/>
        </div>
    )
}

export default NavBar
