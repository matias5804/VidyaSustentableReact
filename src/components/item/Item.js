import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/styles.css';

const Item = ({id, name, image, price}) => {

    return( 
        
        <div className='card'>
            <Link to={(`/product/${id}`)}className='div_imgCard'>  
                <div className='divImgCard'>
                    <img src={image} alt={name} className='imgCard'></img>
                </div>
            </Link> 

            <div className='divProPreBot'>
                <h3 className="tituloCard">{name}</h3>
                <p className="precioCard">$ <span>{price}</span></p>
                <Link to={(`/product/${id}`)}className='div_imgCard'>  
                    <button className="btnComprarCard">
                        - Ver Artículo -
                    </button>
                </Link>
            </div>
        </div>
        
    );
}

export default Item