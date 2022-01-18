import React from 'react'
import comoComprar  from '../../assets/imgPag/comoComprar.jpg'
import  '../styles/nosotros.css';

const ComoComprar = () => {
    return (
        <div className="mainNosotros">
          
            <div className="divImagenPortada">
                <img className="imagenPortada" src={comoComprar} alt="imagen Como Comprar"/>
            </div>

            <div className="divSubYTitulo">
                <h1>¿COMO COMPRAR?</h1>
            </div>

            <div className="divParrafo">
                <p className="textoArticulos">¿Cómo realizo una compra?
                    El proceso de compra es muy sencillo. <br/> <br/>
                    
                    1 - Elegí los productos : Agregá al carrito de compras todos los productos que quieras. Para saber el costo del envío ingresá al carrito de compras, escribí tu código postal y hacé clic en CALCULAR ENVÍO.  Antes de iniciar la compra podés agregar y quitar productos del carrito cuantas veces quieras. <br/> <br/>
                    
                    2 - Iniciar compra: una vez elegidos los productos ingresá al carrito de compras y hacé clic en FINALIZAR COMPRA. <br/> <br/>
                    
                    3 - Completar formulario: Vas a ver un formulario “DETALLES DE FACTURACIÓN” para llenar con tus datos personales. Los campos marcados con un * son obligatorios. <br/>  
                    
                    En este mismo paso tenés que elegir método de pago y envío. Ésta sección la vas a ver como “TU PEDIDO”. <br/>
                    
                    Cuando hayas completado todo hacé clic en REALIZAR EL PEDIDO. <br/> <br/>
                    
                    Mercado pago: si seleccionaste como método de pago a Mercado Pago, vas a ser redirigido a una ventana de Mercado Pago para que completes los datos correspondientes. Después de confirmar la compra vas a recibir un correo electrónico con el detalle de tu pedido (si no lo ves chequeá la carpeta de spam o correo no deseado) <br/>
                    
                    Una vez acreditado el pago, prepararemos los productos que hayas elegido y lo enviaremos de acuerdo al método de envío que hayas seleccionado. <br/> <br/>
                    
                    Efectivo: Si estás en la Ciudad de Buenos Aires y querés pagar en efectivo, seleccioná esa opción, hacé clic en finalizar compra y listo, tu pedido ya está en proceso. <br/>
                    
                    Después de confirmar la compra vas a recibir un correo electrónico con el detalle de tu pedido (si no lo ves chequeá la carpeta de spam o correo no deseado), y nosotros nos comunicaremos con vos para coordinar la entrega de tu compra a través del número de teléfono que hayas registrado .
                </p>
            </div>
        </div>
    )
}

export default ComoComprar
