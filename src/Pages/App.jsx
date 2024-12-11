import Inicio from "./Inicio"
import Login from "./LogIn"
import RecuperarContrasena from "./recuperarContrasena"  // Corregí la importación
import RecuperarContrasenaStep1 from "./recuperarContrasenaStep1"  // Corregí la importación
import MensajeBienvenidaCuentaNueva from "../Components/MensajeBienvenidaCuentaNueva"
import BuscarSinRegistro from "./BuscarSinRegisitro"
import PerfilTrabajadorViñeta from "../Components/PerfilTrabajadorViñeta"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />  {/* Añadí esta ruta para Login */}
                <Route path="/recuperarContrasena" element={<RecuperarContrasena />} />
                <Route path="/recuperarContrasenaStep1" element={<RecuperarContrasenaStep1 />} />
                <Route path="/bienvenida-cuenta-nueva" element={<MensajeBienvenidaCuentaNueva />} />
                <Route path="/buscar-sin-registro" element={<BuscarSinRegistro />} />
                <Route peth="/perfil-trabajador-viñeta" element={<PerfilTrabajadorViñeta />} />
            </Routes>
        </Router>
    )
}
