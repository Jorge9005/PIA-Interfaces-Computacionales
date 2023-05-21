import imgCable from '../assets/img/cableado-estructurado.jpg'
import imgTelefonia from '../assets/img/telefonia.jpg'
import imgComputadoras from '../assets/img/computadoras.jpg'
import imgCCTV from '../assets/img/cctv.jpg'

function Servicios() {
    return (
        <div className="wrapper-servicios">
            <div class="container-servicios">
                <h1 className='container-titulo-servicios'>Servicios de Tecnologías de la Información</h1>
                <h2>Cable Estructurado</h2>
                <p>
                    Diseño, ingeniería, implementación y soporte de redes de datos (cobre y fibra óptica), voz y vídeo.
                    Contamos con la Certificación de Cableado Estructurado, lo que nos permite ofrecer garantías de hasta
                    25 años en dichos sistemas.
                </p>
                <ul>
                    <li>Pruebas de certificación a cableado UTP nivel 5, 5e y 6</li>
                    <li>Cableado Horizontal</li>
                    <li>Cableado Backbone</li>
                    <li>Cuartos de Telecomunicaciones</li>
                    <li>Sistemas de tierra</li>
                    <li>Identificación de cableado</li>
                    <li>Instalación de cableado aéreo y subterráneo</li>
                </ul>
                <img src={imgCable} alt="Cable estructurado"></img>

                <h2>Telefonía</h2>
                <p>
                    Servicio de mantenimiento preventivo y correctivo a conmutadores (PBX) analógicos, digitales, VoIP.
                    Pólizas de mantenimiento preventivo y correctivo de respuesta inmediata para conmutadores con opciones
                    de respaldo. Venta e instalación de equipo de voceo, música ambiental, teléfonos IP, teléfonos multilinea,
                    teléfonos inalámbricos, correo de voz, tarjetas E1 y una gran variedad de accesorios.
                </p>
                <img src={imgTelefonia} alt="Telefonía"></img>

                <h2>Cómputo</h2>
                <p>
                    Servicio de mantenimiento preventivo y correctivo a equipos de cómputo. Pólizas de mantenimiento preventivo,
                    permite programar con tiempo los mantenimientos, los cuales como base son 4 al año, en caso de ser necesario
                    y a conveniencia del cliente el número de mantenimientos al año pueden aumentar. Venta e instalación de
                    proyectores, equipo de cómputo desktop, laptops, licenciamiento de software, impresoras y una gran variedad
                    de accesorios.
                </p>
                <img src={imgComputadoras} alt="Cómputo"></img>

                <h2>CCTV</h2>
                <p>
                    Diseño, ingeniería e implementación de sistemas de CCTV, sistemas industriales, comerciales y residenciales.
                    Venta e instalación de cámaras infrarrojas, de movimiento, con zoom, IP, DVR´s, matriciales además de una
                    gran variedad de accesorios.
                </p>
                <img src={imgCCTV} alt="CCTV"></img>
            </div>
        </div>
    );
}

export default Servicios;