import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppLibreriaVirtual } from './Libreria_virtual';
import { AppPortafolioWeb } from './portafolio_web';
import Card from './Components/Card'; // Importa el componente Card
import user from './data/user'; // Importa los datos de usuario desde el archivo user.js

 // Importar el componente Navbar desde el archivo menu.js
import Navbar from "./Components/menu";

const userList = user.map((v) => {
    return <Card
      name={v.name} // Propiedad "name" del objeto v
      pro={v.pro} // Propiedad "pro" del objeto v
      descripcion={v.descripcion} // Propiedad "descripcion" del objeto v
      image={v.image} // Propiedad "image" del objeto v
      pdf={v.pdf} // Propiedad "pdf" del objeto v
    />;
  });

function App() {

    return (

        <React.Fragment>
            {/* Renderiza el componente Navbar dentro del componente App */}
            <Navbar/>

            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/libreria_virtual" element={<AppLibreriaVirtual />} />
                        <Route path="/portafolio_web" element={<AppPortafolioWeb />} />
                    </Routes>
                </div>
            </Router>

        </React.Fragment>

    );
}

/* 

Se importa la biblioteca React.
Se importa el componente Navbar desde el archivo menu.js.
Se define el componente App como una función de React.
El componente App devuelve el componente Navbar dentro de un fragmento <React.Fragment>. Un fragmento es una forma de agrupar múltiples elementos hijos sin agregar nodos adicionales al DOM.
Finalmente, el componente App se exporta como el componente principal de la aplicación.

*/

function Home() {
    return (

    <div className="App">
        
        {/*Aqui comienza la seccion uno*/}
        <section class="seccion_uno">

            <div class="descripcion"></div>

            {/*Esto es la seccion dentro del contenido*/}
            <section class="design-section">

                <div class="timeline">
    
                    <img src={require('./IMG/libreria5.PNG')} class="imagen_inicio1" alt='libreria_virtual' />  
                    <img src={require('./IMG/web1.png')} class="imagen_inicio2" alt='libreria_virtual' />  
                    <img src={require('./IMG/web2.PNG')} class="imagen_inicio3" alt='libreria_virtual' />  

                </div>

                <div class="timeline2">
    
                    {/*Por este lado estamos viendo la introduccion de lo que va ser el proyecto */}
                    <div class="contenedor_texto">
                        <h1>INTRODUCCIÓN</h1>
                    </div>
    
                    <div class="contenedor_texto2">
                        <p>El proyecto de portafolio personalizado con JavaScript, CSS y React es una iniciativa para desarrollar una aplicación web interactiva y atractiva que sirva como una herramienta efectiva para presentar nuestras habilidades y experiencia profesional en el campo de la programación. Una de las principales ventajas de este proyecto es la incorporación de React.<br></br> <br></br> A lo largo de este proyecto, exploraremos cómo combinar estas tres tecnologías de vanguardia para crear un portafolio atractivo y funcional. Aprenderemos a utilizar JavaScript para agregar elementos interactivos, CSS para diseñar una apariencia visual impresionante y React para crear una estructura modular y reutilizable. React permite crear componentes reutilizables que pueden actualizarse de manera eficiente y renderizarse rápidamente, lo que mejora la experiencia del usuario y facilita el mantenimiento del código.</p>
                    </div>

                </div>

            </section>

        </section>

        <section id="proyectos" class="seccion_dos">

            <div class="container">
                <div class="text-box">
                    <h1 class="h1_proyectos">PROYECTOS</h1>
                    <h1 class="h1_proyectos">PROYECTOS</h1>
                </div>
            </div>

            <div class="proyectos">
                <div class="card">
                    <Link to="/libreria_virtual">
                    <div className="img-card" style={{backgroundImage: `url(${require('./IMG/libreria5.PNG')})`, backgroundSize: 'cover'}}></div>
                    </Link>
                    <div class="info-card">
                        <p><strong>LIBRERIA VIRTUAL</strong></p>
                        <p>ANDROID STUDIO</p>
                    </div>
                </div>
                <div class="card">
                    <Link to="/portafolio_web">
                    <div className="img-card" style={{backgroundImage: `url(${require('./IMG/web4.PNG')})`, backgroundSize: 'cover'}}></div>
                    </Link>
                    <div class="info-card">
                        <p><strong>PORTAFOLIO WEB</strong></p>
                        <p>PHP, JAVASCRIPT, HTML Y CSS</p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card"></div>
                    <div class="info-card">
                        <p><strong></strong></p>
                        <p></p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card"></div>
                    <div class="info-card">
                        <p><strong></strong></p>
                        <p></p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card"></div>
                    <div class="info-card">
                        <p><strong></strong></p>
                        <p></p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card"></div>
                    <div class="info-card">
                        <p><strong></strong></p>
                        <p></p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card"></div>
                    <div class="info-card">
                        <p><strong></strong></p>
                        <p></p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card"></div>
                    <div class="info-card">
                        <p><strong></strong></p>
                        <p></p>
                    </div>
                </div>
                <div class="card">
                    <div class="img-card"></div>
                    <div class="info-card">
                        <p><strong></strong></p>
                        <p></p>
                    </div>
                </div>

            </div>

            <div class="close_title"></div>

        </section>

        <section id='contactos' className='seccion_tres'>

            <div class="contenedor_texto_contacto">
                <h1>NOSOTROS</h1>
            </div>

            <div className='tarjeta'>
                {userList} {/* Renderiza la lista de componentes Card */}
            </div>

        </section>

    </div>

    );

  }

export default App;