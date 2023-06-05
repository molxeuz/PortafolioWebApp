import './estilos_proyectos.css';

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppPortafolioWeb } from './portafolio_web';

function AppLibreriaVirtual() {
    return (
        <div className="App">
          <Routes>
            <Route path="/" element={<LibreriaVirtual />} />
            <Route path="/portafolio_web" element={<AppPortafolioWeb />} />
          </Routes>
        </div>
    );
  }

const LibreriaVirtual = () => {

    return(

        <section class="seccion_proyecto" style={{paddingTop: '80px', scrollMarginTop: '95px'}}>

            <div class="container_sobre">

                <div class="decoracion_uno">LIBRERIA VIRTUAL</div>

                <img src={require('./IMG/imagen_libreria_virtual.PNG')} class="fondo" alt='fondo_libreria_virtual' />  

                <div class="container_imagen">
                
                  <img src={require('./IMG/libreria5.PNG')} class="imagen" alt='libreria_virtual' />  
                  <img src={require('./IMG/libreria_codigo.PNG')} class="imagen" alt='libreria_virtual' />  
                  <img src={require('./IMG/codigo_dos.PNG')} class="imagen" alt='libreria_virtual' />  

                </div>

                <div class="decoracion_dos"></div>

                <div class="sobre_proyecto">

                  <div class="decoracion_tres"></div>

                  <h2 class="titulo_sobre">SOBRE EL PROYECTO:</h2>

                  <h3 class="explicacion_sobre">La interfaz principal de la aplicación consta de tres secciones principales: Registro de Libros, Registro de Usuarios y Registro de Rentas. Cada sección tiene su propia lista dedicada para mostrar los elementos relacionados. <br/> <br/> La base de datos MySQL se utiliza para almacenar y recuperar la información relacionada con libros, usuarios y rentas. Cada vez que se realiza una acción, como agregar un libro, registrar un usuario o iniciar una renta, los datos se guardan en la base de datos para su posterior recuperación y consulta. <br/> <br/> En resumen, esta biblioteca virtual desarrollada en Android Studio proporciona una forma eficiente y conveniente de administrar libros, usuarios y rentas. Con sus tres interfaces principales y su integración con una base de datos MySQL, facilita la organización y seguimiento de los recursos de una biblioteca de manera efectiva.</h3>

                  <div class="decoracion_cuatro"></div>

                </div>

                <a class="github" href="https://github.com/Ch31ios/Virtual_library" target="_blank" rel='noreferrer'>ir a GitHub!</a>

                <Link class="regresar" to="/">VOLVER</Link>
                <Link class="siguiente" to="/portafolio_web">SIGUIENTE</Link>

            </div>

        </section>

    )

};

export {AppLibreriaVirtual};