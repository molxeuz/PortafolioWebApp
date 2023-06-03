import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Libreria_virtual } from './Libreria_virtual';
import { PortafolioWeb } from './portafolio_web';

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/libreria_virtual" element={<Libreria_virtual />} />
            <Route path="/portafolio_web" element={<PortafolioWeb />} />
          </Routes>
        </div>
      </Router>
    );
  }

  function Home() {
    return (

        <section class="seccion_dos">

            <div class="container">
                <div class="text-box">
                    <h1>PROYECTOS</h1>
                    <h1>PROYECTOS</h1>
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
                    <p><strong>Lorem ipsum</strong></p>
                    <p>Price: 15$</p>
                </div>
            </div>
            <div class="card">
                <div class="img-card"></div>
                <div class="info-card">
                    <p><strong>Lorem ipsum</strong></p>
                    <p>Price: 15$</p>
                </div>
            </div>
            <div class="card">
                <div class="img-card"></div>
                <div class="info-card">
                    <p><strong>Lorem ipsum</strong></p>
                    <p>Price: 15$</p>
                </div>
            </div>
            <div class="card">
                <div class="img-card"></div>
                <div class="info-card">
                    <p><strong>Lorem ipsum</strong></p>
                    <p>Price: 15$</p>
                </div>
            </div>
            <div class="card">
                <div class="img-card"></div>
                <div class="info-card">
                    <p><strong>Lorem ipsum</strong></p>
                    <p>Price: 15$</p>
                </div>
            </div>
            <div class="card">
                <div class="img-card"></div>
                <div class="info-card">
                    <p><strong>Lorem ipsum</strong></p>
                    <p>Price: 15$</p>
                </div>
            </div>
            <div class="card">
                <div class="img-card"></div>
                <div class="info-card">
                    <p><strong>Lorem ipsum</strong></p>
                    <p>Price: 15$</p>
                </div>
            </div>

            </div>

            <div class="close_title"></div>

        </section>

    );

  }

export default App;