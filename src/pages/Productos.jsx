import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide4 from '../assets/img/slide4.jpg'
import slide5 from '../assets/img/slide5.jpg'
import slide6 from '../assets/img/slide6.jpg'
import slide7 from '../assets/img/slide7.jpg'
import slide8 from '../assets/img/slide8.jpg'
import slide9 from '../assets/img/slide9.jpg'
import slide10 from '../assets/img/slide10.jpg'


function Productos() {
    return (
        <div className='wrapper-Productos'>
            <div class="productos-slider-container">
                <h1>Productos</h1>
                <p>Nuestras divisiones de Cableado Estructurado, Telefonía y Cómputo, nos permite generar proyectos de integración de redes de Voz-Datos-Video, desarrollando redes nuevas y optimizando redes existentes.</p>
                <div class="productos-slider">
                    <div class="productos-card">
                        <img src={slide1} alt='slide1' />
                        <h2>Barra Colectora</h2>
                    </div>
                    <div class="productos-card">
                        <img src={slide2} alt='slide2' />
                        <h2>Cable de Fibra Óptica</h2>
                    </div>
                    <div class="productos-card">
                        <img src={slide4} alt='slide4' />
                        <h2>Cámara de Ultra Gran Velocidad</h2>
                    </div>
                    <div class="productos-card">
                        <img src={slide5} alt='slide5' />
                        <h2>Cámaras de seguridad</h2>
                    </div>
                    <div class="productos-card">
                        <img src={slide6} alt='slide6' />
                        <h2>CAT 6 UNIVERSAL 48 PORT PATCH PA</h2>
                    </div>
                    <div class="productos-card">
                        <img src={slide7} alt='slide7' />
                        <h2>Cable Estructurado</h2>
                    </div>
                    <div class="productos-card">
                        <img src={slide8} alt='slide8' />
                        <h2>Configuración de Redes</h2>
                    </div>
                    <div class="productos-card">
                        <img src={slide9} alt='slide9' />
                        <h2>PANASONIC KX</h2>
                    </div>
                    <div class="productos-card">
                        <img src={slide10} alt='slide10' />
                        <h2>TELÉFONO PANASONIC KX-T7630SP</h2>
                    </div>
                </div>
            </div>
            <div className='wrapper-body'>
                <h3>Cableado estructurado</h3>
                <p>Proveemos el diseño y la ingeniería para el suministro e instalación de Cableado Estructurado, contamos con la certificación correspondiente y alianzas con marcas lideres del mercado lo que nos permite ofrecer soluciones de acuerdo a la necesidad de cada cliente asegurando el cumplimiento de las normas internacionales y ofreciendo una garantía de fábrica de hasta 25 años en cada proyecto.
                    Con  una  experiencia  de mas de 15  años  en  el  mercado,  nuestro  personal altamente capacitado le garantiza una solución con base a tecnología de punta  y al mejor costo-beneficio. Operamos con cableado en categoría 5, 5e y 6,  fibra  óptica  monomodo  y  multimodo  (interior  y exterior) incluyendo accesorios como: jacks, plugs, faceplates, patch cords (UTP, FTP, MTRJ, ST, SC, entre otros), cables multipares (interior y exterior) así como racks, patch panels, barras de tierra para rack, administradores de cable, Ofrecemos la venta de switch, routers, modems ADSL, access points, transceivers, multiplexores, etc.</p>
                <h3>Telefonía</h3>
                <p>Proveemos el diseño y la ingeniería para el suministro e instalación de Cableado Estructurado, contamos con la certificación correspondiente y alianzas con marcas lideres del mercado lo que nos permite ofrecer soluciones de acuerdo a la necesidad de cada cliente asegurando el cumplimiento de las normas internacionales y ofreciendo una garantía de fábrica de hasta 25 años en cada proyecto.
                    Con  una  experiencia  de mas de 15  años  en  el  mercado,  nuestro  personal altamente capacitado le garantiza una solución con base a tecnología de punta  y al mejor costo-beneficio. Operamos con cableado en categoría 5, 5e y 6,  fibra  óptica  monomodo  y  multimodo  (interior  y exterior) incluyendo accesorios como: jacks, plugs, faceplates, patch cords (UTP, FTP, MTRJ, ST, SC, entre otros), cables multipares (interior y exterior) así como racks, patch panels, barras de tierra para rack, administradores de cable, Ofrecemos la venta de switch, routers, modems ADSL, access points, transceivers, multiplexores, etc.</p>
                <h3>Cómputo</h3>
                <p>Proveemos el diseño y la ingeniería para el suministro e instalación de Cableado Estructurado, contamos con la certificación correspondiente y alianzas con marcas lideres del mercado lo que nos permite ofrecer soluciones de acuerdo a la necesidad de cada cliente asegurando el cumplimiento de las normas internacionales y ofreciendo una garantía de fábrica de hasta 25 años en cada proyecto.
                    Con  una  experiencia  de mas de 15  años  en  el  mercado,  nuestro  personal altamente capacitado le garantiza una solución con base a tecnología de punta  y al mejor costo-beneficio. Operamos con cableado en categoría 5, 5e y 6,  fibra  óptica  monomodo  y  multimodo  (interior  y exterior) incluyendo accesorios como: jacks, plugs, faceplates, patch cords (UTP, FTP, MTRJ, ST, SC, entre otros), cables multipares (interior y exterior) así como racks, patch panels, barras de tierra para rack, administradores de cable, Ofrecemos la venta de switch, routers, modems ADSL, access points, transceivers, multiplexores, etc.</p>
                <h3>CCTV</h3>
                <p>Una de las mayores preocupaciones hoy en día es mantener la seguridad y control del entorno en el que nos movemos, para ello, ofrecemos la ingeniería, venta, instalación y configuración de sistemas de Circuito Cerrado de Televisión (CCTV) para Vigilancia/Monitoreo de forma local o remota. Contamos con una gran variedad de sistemas que cubren las necesidades básicas como lo es el usuario residencial hasta las más demandantes como lo es el usuario corporativo.
                    Comercializamos equipos de marcas líderes en el mercado con el fin de ofrecer la mejor tecnología al mejor costo.
                    Entre otros equipos ofrecemos grabadores digitales (DVR), cámaras tipo bullet o domo, fijas o con movimiento, cámaras IP o análogas, monitores, matriciales, transmisores y una gran variedad de accesorios.</p>
            </div>
        </div>
    );
}

export default Productos;