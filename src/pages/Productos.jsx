import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'
import slide5 from '../assets/img/slide5.jpg'
import slide6 from '../assets/img/slide6.jpg'
import slide7 from '../assets/img/slide7.jpg'
import slide8 from '../assets/img/slide8.jpg'
import slide9 from '../assets/img/slide9.jpg'
import slide10 from '../assets/img/slide10.jpg'

function Productos() {
    return (
        <div className='wrapper-Productos d-flex flex-row'>
            <div className="wrapper-panel-izq d-flex flex-column">
                <a href="#">Cableado Estructurado</a>
                <a href="#">Telefonía</a>
                <a href="#">Cómputo</a>
                <a href="#">CCTV</a>
            </div>
            <div id="carouselExampleIndicators" className="carousel-menu-Productos carousel slide d-flex flex-column">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 6" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={6} aria-label="Slide 7" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={7} aria-label="Slide 8" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={8} aria-label="Slide 9" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={9} aria-label="Slide 10" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="carousel-img d-block" alt="slide1" />
                        <div class="carousel-caption d-none d-md-block">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="carousel-img d-block" alt="slide2" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="carousel-img d-block" alt="slide3" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide4} className="carousel-img d-block" alt="slide4" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide5} className="carousel-img d-block" alt="slide5" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide6} className="carousel-img d-block" alt="slide6" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide7} className="carousel-img d-block" alt="slide7" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide8} className="carousel-img d-block" alt="slide8" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide9} className="carousel-img d-block" alt="slide9" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide10} className="carousel-img d-block" alt="slide10" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    );
}

export default Productos;