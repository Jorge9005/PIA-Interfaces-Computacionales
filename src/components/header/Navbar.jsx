import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icono from '../../assets/img/icono.png';
import './navbar.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>
      <div className="wrapper-navbar">
        <button className="toggle-button" onClick={toggleLinks}>
          Menu
        </button>
        <Link className='link-navbar' to={'/inicio'}>
          <img src={icono} alt="logo" />
        </Link>
        <div className={`links ${showLinks ? 'show' : ''}`}>
          <Link className='link-navbar' to={'/inicio'}>
            Inicio
          </Link>
          <Link className='link-navbar' to={'/productos'}>
            Productos
          </Link>
          <Link className='link-navbar' to={'/servicios'}>
            Servicios
          </Link>
          <Link className='link-navbar' to={'/contacto'}>
            Contacto
          </Link>
          <Link className='link-navbar' to={'/equipo'}>
            Equipo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
