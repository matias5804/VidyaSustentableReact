import React from 'react'
import envios from '../../assets/imgPag/envios.jpg'
import  '../styles/nosotros.css';

const Envios = () => {
    return (
        <div class="mainNosotros">

            <div class="divImagenPortada">
                <img class="imagenPortada" src={envios} alt="imagen envios"/>
            </div>

            <div class="divSubYTitulo">
                <h1>Información sobre los envíos</h1>
            </div>

            <div class="divParrafo">
                <p class="textoArticulos">Sabemos que este es un momento muy particular, y que antes de hacer una compra seguramente necesites estar al tanto de cómo se van a gestionar los pedidos que hagas en la tienda online.<br/> <br/>

                Los envíos están divididos en dos zonas: <br/>

                Envíos a todo el país. <br/>

                Entregas en la ciudad de Bs. As. <br/> <br/>

                Envíos a todo el país: <br/>
                Estamos haciendo envíos con normalidad.
                Despachamos los paquetes de lunes a viernes por la mañana.
                Los envíos se realizan a través de Correo Argentino.
                El costo de envío arranca en $290 con retiro en sucursal y $430 a domicilio. <br/>

                Para saber el costo exacto del envío sólo tenés que agregar al carrito de compras todos los productos que quieras y luego, desde la sección “carrito de compras”, cargar el código postal de tu ciudad. <br/> <br/>
                Entregas en la ciudad de Buenos Aires: <br/>     
                Podés pasar a buscar tu pedido por nuestro punto de retiro.:
                De lunes a viernes con previo aviso para coordinar el horario de entrega. <br/>

                Si no es posible retirar tu compra, podés enviar a un servicio de mensajería para que pase a buscar el pedido por nuestro punto de retiro y lo lleve a tu domicilio. En este caso la gestión y el gasto del envío corren por tu cuenta. <br/>

                Todas las entregas se coordinan a través de WhatsApp
                Luego de que efectúes el pedido en la página web nos vamos a contactar con vos por WhatsApp, por lo que es muy importante que escribas en el formulario de compra tu número de celular completo (código de área + número de celular). <br/>

                Si te quedan dudas sobre los envíos o tenés alguna otra consulta, podés contactarte a través de nuestras redes sociales o del formulario de contacto que figuran en la página de contacto.
                </p>
            </div>
        </div>
    )
}

export default Envios
