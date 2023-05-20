import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide4 from '../assets/img/slide4.jpg'
import slide5 from '../assets/img/slide5.jpg'
import slide6 from '../assets/img/slide6.jpg'
import slide7 from '../assets/img/slide7.jpg'
import slide8 from '../assets/img/slide8.jpg'
import slide9 from '../assets/img/slide9.jpg'
import slide10 from '../assets/img/slide10.jpg'
import React, { useState } from 'react';


function Productos() {
    const [isPanelOpen, setPanelOpen] = useState(true);
    const togglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };
    return (
        <div className='wrapper-Productos'>
            <div class="wrapper-panel-izq">
                <button className={`toggle-button ${isPanelOpen ? '' : 'hidden'}`} onClick={togglePanel}>
                    <span className="triangle-down"></span>
                </button>
                <div className={`panel ${isPanelOpen ? '' : 'hidden'}`}>
                    <ul>
                        <li>
                            <a href="www.google.com">Sección 1</a>
                        </li>
                        <li>
                            <a href="www.google.com">Sección 2</a>
                        </li>
                        <li>
                            <a href="www.google.com">Sección 3</a>
                        </li>
                        <li>
                            <a href="www.google.com">Sección 4</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="wrapper-panel-der">
                <div class="productos-slider-container">
                    <div class="productos-slider">
                        <div class="productos-card">
                            <img src={slide1}/>
                                <h2>Card 1</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="productos-card">
                            <img src={slide2}/>
                                <h2>Card 2</h2>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class="productos-card">
                            <img src={slide4}/>
                                <h2>Card 3</h2>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="productos-card">
                            <img src={slide5}/>
                                <h2>Card 3</h2>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="productos-card">
                            <img src={slide6}/>
                                <h2>Card 3</h2>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="productos-card">
                            <img src={slide7}/>
                                <h2>Card 3</h2>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="productos-card">
                            <img src={slide8}/>
                                <h2>Card 3</h2>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="productos-card">
                            <img src={slide9}/>
                                <h2>Card 3</h2>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="productos-card">
                            <img src={slide10}/>
                                <h2>Card 3</h2>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productos;