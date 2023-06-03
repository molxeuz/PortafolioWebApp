import './Libreria_virtual.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Libreria_virtual } from './Libreria_virtual';

function App_portafolio_web() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<portafolio_web />} />
            <Route path="/libreria_virtual" element={<Libreria_virtual />} />
          </Routes>
        </div>
      </Router>
    );
}

const PortafolioWeb = () => {

    return(

        <section class="seccion_proyecto_web">

            <div class="container_sobre">

                <div class="decoracion_uno">PORTAFOLIO WEB</div>

                <img src={require('./IMG/web_fondo.PNG')} class="fondo" alt='fondo_libreria_virtual' />  

                <div class="container_imagen">
                
                  <img src={require('./IMG/web1.png')} class="imagen" alt='libreria_virtual' />  
                  <img src={require('./IMG/web2.PNG')} class="imagen" alt='libreria_virtual' />  
                  <img src={require('./IMG/web3.PNG')} class="imagen" alt='libreria_virtual' />  

                </div>

                <div class="decoracion_dos"></div>

                <div class="sobre_proyecto">

                  <div class="decoracion_tres"></div>

                  <h2 class="titulo_sobre">SOBRE EL PROYECTO:</h2>

                  <h3 class="explicacion_sobre"> El proyecto consiste en desarrollar un portafolio web para un fotógrafo, con un diseño intuitivo y atractivo. El sitio cuenta con un menú principal que incluye las secciones de inicio, portafolio, galería y contacto. <br/> <br/> La página tiene dos versiones: una pública, accesible para todos los visitantes, y otra reservada exclusivamente para el dueño del sitio, donde puede realizar modificaciones en el contenido y material de la página. <br/> <br/> Este enfoque garantiza la actualización constante del portafolio y facilita la gestión de la página al propietario. El diseño del sitio está diseñado para resaltar las imágenes del fotógrafo, permitiendo que su trabajo brille y se presente de manera profesional.</h3>

                  <div class="decoracion_cuatro"></div>

                </div>

                <a class="github" href="https://github.com/Ch31ios/Portafolio_WEB" target="_blank" rel='noreferrer'>ir a GitHub!</a>

                <Link class="regresar" to="/">VOLVER</Link>
                <Link class="siguiente" to="/libreria_virtual">SIGUIENTE</Link>

            </div>

        </section>

    )

};

export {PortafolioWeb};