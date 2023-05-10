import './navbar.css'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../../routes/AppRouter';
import Inicio from '../../pages/Inicio';

function Navbar() {
    return (
        <>
            <BrowserRouter>
                <AppRouter></AppRouter>
            </BrowserRouter>
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