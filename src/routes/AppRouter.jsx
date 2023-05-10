import { Navigate, Route, Routes } from "react-router-dom";

import Inicio from '../pages/Inicio'

function AppRouter() {
    return (
        <Routes>
            <Route path="Inicio" element={<Inicio/>}/>
        </Routes>
    );
}

export default AppRouter;