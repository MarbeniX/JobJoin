import Inicio from "./Inicio"
import Login from "./LogIn"
import RecuperarContrasena from "./recuperarContrasena"  // Corregí la importación
import Header from "../Components/Header"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />  {/* Añadí esta ruta para Login */}
                <Route path="/recuperarContrasena" element={<RecuperarContrasena />} />
                <Route path="/header" element={<Header />} />  {/* Ruta para Header, si la necesitas */}
            </Routes>
        </Router>
    )
}
