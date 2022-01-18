import React from 'react'
import fotoContacto from '../../assets/imgPag/fotoContacto.jpg'
import '../styles/contacto.css'

const Contacto = () => {
    return (
        <div className='diGral'>

            <div className="divContacto">

                <div className="divImgContacto">

                    <img className='imgContacto'  src={fotoContacto} alt='foto contacto'/>

                </div>

                <div className="">
                    <div className="">

                        <div className="tituloForm">CONTACTO</div>
                        
                        <p className="textCompl">Complete el Formulario y nos comunicaremos a la brevedad.<br/> Muchas Gracias</p>
                   
                    </div>
        
                    <form className='form'>
        
                        <input className="form-nombre" id="name" type="text" placeholder="Nombre" />
                
                        <input className="form-email" id="emailAddress" type="email" placeholder="Direccion de Email" />                                                                   
                        <textarea className="form-textarea" id="message" type="text" placeholder="Escriba su Consulta" ></textarea>
                
                        <button className="btnForm" id="submitButton" type="submit">Enviar
                        </button>
                   
                    </form>
            
    
                </div>

            </div>
                          
        </div>
    )
}

export default Contacto
