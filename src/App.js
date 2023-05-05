import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <p className="text-warning">Hola</p>
    </div>
  );
}

export default App;
