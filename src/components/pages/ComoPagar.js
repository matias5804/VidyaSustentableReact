import React from 'react'
import MediosDePagos  from '../../assets/imgPag/mediosDePagos.jpg'
import  '../styles/nosotros.css';

const ComoPagar = () => {
    return (
        <div>
            <div className="divSubYTitulo">
                <h1>MEDIOS DE PAGOS</h1>
            </div>

            <div className="divImagenPortadaPago">
                <img className="imagenPortadaPago" src={MediosDePagos} alt="imagen medios de pagos"/>
            </div>

        </div>
    )
}

export default ComoPagar
