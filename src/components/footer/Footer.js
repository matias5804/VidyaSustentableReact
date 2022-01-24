import React from 'react'

import '../styles/footer.css';
import { Link } from 'react-router-dom';
import Contacto from '../pages/Contacto';
import Nosotros from '../pages/Nosotros';

const Footer = () => {
    return (

        <div className='footer'>

            <div className='footer__div'>

                <div class="footer__mapaDeSitio">
                    <h3>MAPA DE SITIO</h3>
                    <ul class="footer__navegador">
                        
                        <li className="nav__item">
                            <Link className='footerItem' to="/">
                                TIENDA
                            </Link>
                        </li>
                        
                        <li className="nav__item">
                            <Link className='footerItem' to ="../pages/Nosotros" element={<Nosotros/>} >
                                NOSOTROS
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link className='footerItem' to ="../pages/Contacto" element={<Contacto/>} >
                                CONTACTO
                            </Link>
                        </li>

                    </ul>
                </div>  

                <div class="footer__newsletter">

                    <h3>NEWSLETTER</h3> 
                    <input type="email" placeholder="ingrese su e-mail"/> 
                    <button className='footer__btn'>Enviar</button>
              

                </div>

            </div>

            <h4 class="footer__copyright">© 2022 Vidya Online</h4>
        </div>    
    )
}

export default Footer
