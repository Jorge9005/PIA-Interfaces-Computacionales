import { Link } from 'react-router-dom';
import icono from '../../assets/img/icono.png'
import './navbar.css'

function Navbar() {
    return (
        <div>
            <div className="wrapper-navbar">
                <Link className='link-navbar' to={'/inicio'}><img src={icono} alt="logo"/></Link>
                <p className='nav link-navbar'>Telecomunicaciones</p>
                <Link className='link-navbar' to={'/inicio'}>Inicio</Link>
                <Link className='link-navbar' to={'/productos'}>Productos</Link>
                <Link className='link-navbar' to={'/servicios'}>Servicios</Link>
                <Link className='link-navbar' to={'/contacto'}>Contacto</Link>
            </div>
        </div>
    );
}

export default Navbar;