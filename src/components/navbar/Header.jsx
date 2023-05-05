import '../navbar/header.css'

function Navbar() {
    return (
        <>
            <Links></Links>
        </>
    );
}

export function Links() {
    return (
        <>
            <a href="../../inicio/Inicio.jsx">Inicio</a>
            <a href="../../inicio/Inicio.jsx">Productos</a>
            <a href="../../inicio/Inicio.jsx">Servicios</a>
            <a href="../../inicio/Inicio.jsx">Contacto</a>
        </>
    );
}


export default Navbar;