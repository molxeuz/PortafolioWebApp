import './Libreria_virtual.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App_libreria_virtual() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Libreria_virtual />} />
            <Route path="/" element={<App_libreria_virtual />} />
          </Routes>
        </div>
      </Router>
    );
  }


const Libreria_virtual = () => {

    return(

        <section class="seccion_proyecto">

            {/* titulo de la seccion */}

            <div className="container_libreria" style={{backgroundImage: 'url()', backgroundSize: 'cover'}}>

                <div class="text_box_libreria">
                    <h1 class="titulo">LIBRERIA.VIRTUAL</h1>
                </div>
                <div class="decorado_uno"></div>
                <div class="decorado_dos"></div>
                <div class="decorado_tres"></div>
                <div class="decorado_cuatro"></div>

                <div class="box_imagen_libreria"></div>
                <div class="card_libreria" style={{backgroundImage: 'url(https://www.paginaswebs.com/wp-content/uploads/2017/12/Kevin-R.-Witman-pluto_animation_red_arrow_2s_forever_1469761409.gif)', backgroundSize: 'cover'}}>
                    <a style={{textDecoration: 'none', textAlign: 'center'}} href="https://github.com/Ch31ios/Virtual_library" class="card_button_libreria" target="_blank" rel="noopener noreferrer">REPOSITORIO EN GITHUB</a>
                </div>
            </div>

            <div class="container_sobre">

                <h2 class="titulo_sobre">Sobre el proyecto:</h2>

                <Link class="regresar" to="/">VOLVER</Link>

            </div>

            {/* parte del proyecto */}

        </section>

    )

};

export {Libreria_virtual};