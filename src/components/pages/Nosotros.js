import React from 'react'
import imagenNosotros from '../../assets/imgPag/imagenNosotros.jpg'
import  '../styles/nosotros.css';

const Nosotros = () => {
    return (

        <div className="mainNosotros">

            <div className="divImagenPortada">
                <img className="imagenPortada" src={imagenNosotros} alt="imagen nosotros"/>
            </div>

            <div className="divSubYTitulo"> 
                <h1>VIDYA </h1>
                <h2>[Del sánscrito,<i> "conocimiento"</i> ]</h2>
            </div>

            <div className="divParrafo">
                <p className="textoArticulos">Con el anhelo de reducir, reutilizar, y reciclar nuestra basura, creamos Vidya, nuestra tienda de artículos sustentables. <br/> <br/>

                Nació del deseo de reducir desperdicios textiles, y reutilizar algunos elementos que usamos para la industria, que ya no servían para su fin original. <br/><br/>
                
                Con la aspiración de promover una economía circular y un consumo consciente, deseamos acercarnos cada vez más a tener una vida sustentable, priorizando el uso de materiales y productos ecológicos y orgánicos. <br/><br/>
                
                Por esa razón, la mayoría de nuestro packaging y algunos de nuestros productos están realizados con desperdicios de la industria textil, y gran parte de los materiales que usamos son biodegradables y 100% naturales. <br/><br/>
                
                <b> Porque creemos que nunca es tarde para contribuir con la preservación de nuestro planeta.</b> 
                </p>

            </div>

        </div>
    )
}

export default Nosotros
