import { Navigate, Route, Routes } from "react-router-dom";

import Inicio from '../pages/Inicio'
import Contacto from '../pages/Contacto'
import Productos from '../pages/Productos'
import Servicios from '../pages/Servicios'
import Equipo from "../pages/Equipo";

function AppRouter() {
    return (
        <Routes>
            <Route path="inicio" element={<Inicio/>}/>
            <Route path="contacto" element={<Contacto/>}/>
            <Route path="productos" element={<Productos/>}/>
            <Route path="servicios" element={<Servicios/>}/>
            <Route path="equipo" element={<Equipo/>}/>
            <Route path="/" element={<Navigate to="/inicio"/>}/>
        </Routes>
    );
}

export default AppRouter;