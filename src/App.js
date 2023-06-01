import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Libreria_virtual } from './Libreria_virtual';

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/libreria_virtual" element={<Libreria_virtual />} />
          </Routes>
        </div>
      </Router>
    );
  }

  function Home() {
    return (

        <section class="seccion_dos">

            {/* titulo de la seccion */}

            <div class="container">
                <div class="text-box">
                    <h1>PROYECTOS</h1>
                    <h1>PROYECTOS</h1>
                </div>
            </div>

            {/* Codigo de la seccion de proyectos */}

            <div class="proyectos">
            <div class="card">
                <Link to="/libreria_virtual">
                    <div class="img-card" style={{backgroundImage: 'url(https://www.paginaswebs.com/wp-content/uploads/2017/12/Kevin-R.-Witman-pluto_animation_red_arrow_2s_forever_1469761409.gif)', backgroundSize: 'cover'}}></div>
                </Link>
                <div class="info-card">
                    <p><strong>Lorem ipsum</strong></p>
                    <p>Price: 15$</p>
                </div>
            </div>
            <div class="card">
                <div class="img-card" style={{backgroundImage: 'url(https://th.bing.com/th/id/R.321577d05658685a9c185146734241f1?rik=mbm4Mkr8s26GUg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-blGGYihPR3c%2fVT9Yb9B992I%2fAAAAAAAAkhI%2fDpQZrELDUns%2fs1600%2f25th-gallery-050.jpg&ehk=1Xp2p56a8GRqB1%2bKYeYYe%2bcMdI%2fm6kCqJ5PzLFB%2fwpU%3d&risl=&pid=ImgRaw&r=0)', backgroundSize: 'cover'}}></div>
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