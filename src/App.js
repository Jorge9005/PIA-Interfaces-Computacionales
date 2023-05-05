import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Contacto from './components/contacto/Contacto';
import Footer from './components/footer/Footer';
import Inicio from './components/inicio/Inicio';
import Navbar from './components/navbar/Header';
import Productos from './components/productos/Productos';
import Servicios from './components/servicios/Servicios';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Inicio></Inicio>
      <Contacto></Contacto>
      <Footer></Footer>
      <Productos></Productos>
      <Servicios></Servicios>
    </div>
  );
}

export default App;
