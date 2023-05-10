import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <Link className='blog-header-logo' to={'/inicio'}>Inicio</Link>
            <Link className='blog-header-logo' to={'/contacto'}>Contacto</Link>
            <Link className='blog-header-logo' to={'/productos'}>Productos</Link>
            <Link className='blog-header-logo' to={'/servicios'}>Servicios</Link>
        </div>
    );
}

export default Navbar;