import React from 'react'
import './About.css'
// import {LogoFace} from "../../img/facebook.png"
 
function About() {
return (
    <>
    <article className='contenedor'>
        <h2 className='title'>Un poco de mi historia...</h2>
        <p className='texto'>Soy Manuel Sanchez German, tengo 23 años y vivo en Córdoba, Argentina.
            Siempre tuve curiosidad por la programación, pero hace poco me encontré
            con este hobby tan copado. Esta página está hecha con React, usando routing
            para que se muestren determinadas cosas en la pantalla. También tiene CSS para
            darle estilos, estos que estan viendo aquí mismo. Además, la página está conectada
            a una API del clima que muestra la temperatura (entre otras cosas) de la ciudad que
            uno busque. Espero que les guste, es una app muy básica pero hecha con mucho amor
            cualquier comentario yo lo voy a estar leyendo y lo voy a apreciar mucho. Muchas gracias
            por tomarte el tiempo de leer esto!
        </p>
    </article>
    
    <div className='menu-social'>
        <a href={"https://www.facebook.com/manu.sanchez.946/"} target="_blank" className='facebook'></a>
        <a href={"https://www.instagram.com/manusanchezok/"} target="_blank" className='instagram'></a>
        <a href={"https://www.linkedin.com/in/manuel-sanchez-german-0816091ba/"} target="_blank" className='linkedin'></a>
        <a href={"https://wa.me/5493517571028"} target="_blank" className='whatsapp'></a>
    </div>
    </>
)
}
 
export default About