import React from 'react'
import { Link } from 'react-router-dom'
import ComoComprar from '../pages/ComoComprar'
import ComoPagar from '../pages/ComoPagar';
import Envios from '../pages/Envios';
import  '../styles/aside.css';
import iconoComoComprar from '../../assets/iconos/iconoComoComprar.png'
import iconoComoPagar from '../../assets/iconos/iconoComoPagar.png'
import iconoEnvio from '../../assets/iconos/iconoEnvio.png'
import iconoInstagram from '../../assets/iconos/iconoInstagram.png'
const Aside = () => {
    return (
        <div>
             <aside >   

                <section className='facilidades'>{/*<!--seccion de facilidades(como pagar, como comprar, envios  y instagram)-->*/}

                    <div  id="comoComprar">
                        
                        <Link className='divFacilidades' to="../pages/ComoComprar" element={<ComoComprar/>}  style={{textDecoration:'none'}}>
                            <div className="facilidades__contImage"  id="iconoComoComprar">
                                <img className='imagenFacilidades'  width="50px" src={iconoComoComprar}  alt="iconoComoComprar" />
                            </div>

                            <div className='facilidades__divTexto' id="textComoComprar">
                                <h3 id="tex" >COMO COMPRAR</h3>
                            </div>
                        </Link>
                    </div >
                    
                    <div  id="comoPagar">
                        <Link className='divFacilidades' to='../pages/ComoPagar' element={<ComoPagar/>}  style={{textDecoration:'none'}}>
                            <div className="facilidades__contImage" id="iconoComoPagar">
                                <img className="imagenFacilidades" src={iconoComoPagar} width="50px"  alt="iconoComoPagar" />
                            </div>

                            <div className='facilidades__divTexto' id="textComoPagar">
                                <h3 id="tex" >COMO PAGAR</h3>
                            </div>
                        </Link>
                    </div >

                    <div id="envios">
                        <Link className='divFacilidades' to='../pages/Envios' element={<Envios/> }  style={{textDecoration:'none'}}>
                            <div className="facilidades__contImage">
                                <img className="imagenFacilidades" src={iconoEnvio} width="50px"  alt="iconoEnvios" />
                            </div>

                            <div className="facilidades__divTexto">
                                <h3 id="tex" >ENVIOS</h3>
                            </div>
                        </Link>
                    </div>
                    
                    <div className='divFacilidades' id="seguinosEnInstagram">
                        <a className='divFacilidades' href="https://www.instagram.com/vidya.articulos.sustentables/"  style={{textDecoration:'none'}}>
                            <div className="facilidades__contImage">
                                <img className="imagenFacilidades" src={iconoInstagram} width="50px"  alt="seguinosEnInstagram"/> 
                            </div>

                            <div className="facilidades__divTexto">
                                <h3 id="tex" style={{textDecoration:'none'}}>SEGUINOS EN INSTAGRAM</h3>
                            </div>
                        </a>
                    </div>

                </section> 


                
                {/*/boton whatsApp modo fixd , te envia directoi al chat con una pestaña nueva/*/}
                <a className='fixed-whatsapp' href="https://api.whatsapp.com/send?phone=541133554248'">
                </a>

            </aside>   

       
        </div>
    )
}

export default Aside
