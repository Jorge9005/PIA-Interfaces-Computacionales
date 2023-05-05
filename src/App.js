import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Inicio from './components/inicio/Inicio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Inicio></Inicio>
    </div>
  );
}

export default App;
