import React from 'react';
import CartWidget from '../cartwidget/CartWidget';
import logoHorizontal from '../../assets/imgLogos/logoHorizontal.png';
import '../styles/navBar.css';
import { Link} from 'react-router-dom';
import Nosotros from '../pages/Nosotros';
import Contacto from '../pages/Contacto';

const NavBar = () => {
    return (
        <div className="divNav">
        
            <div className="nav__divBrand">
                <Link to="/" className="nav__brandLink" >
                    <img className="nav__brand" src={logoHorizontal} alt="logo"/>
                </Link>
            </div>

            <ul className="nav__container">

                <li className="nav__item">
                    <Link to="/" className='navLink' >
                        TIENDA
                    </Link>
                </li>
                
                <li className="nav__item">
                    <Link to ="../pages/Nosotros" element={<Nosotros/>} className='navLink' >
                        NOSOTROS
                    </Link>
                </li>

                <li className="nav__item">
                    <Link to ="../pages/Contacto" element={<Contacto/>} className='navLink' >
                        CONTACTO
                    </Link>
                </li>

            </ul>
        
            <CartWidget/>
        
        </div>
    )
}

export default NavBar
