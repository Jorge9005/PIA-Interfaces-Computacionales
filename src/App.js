import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';

import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AppRouter></AppRouter>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
