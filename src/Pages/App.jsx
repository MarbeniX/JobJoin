import Inicio from "./Inicio"
import Login from "./LogIn"
import RecuperarContrasena from "./recuperarContrasena"  // Corregí la importación
import RecuperarContrasenaStep1 from "./recuperarContrasenaStep1"  // Corregí la importación
import MensajeBienvenidaCuentaNueva from "../Messages/MensajeBienvenidaCuentaNueva"
import BuscarSinRegistro from "./BuscarSinRegisitro"
import MensajeReenviarCodigo from "../Messages/MensajeReenviarCodigo"
import MensajeConfirmaciónReenvioCodigo from "../Messages/MensajeConfirmaciónReenvioCodigo"
import MensajeCodigoIncorrecto from "../Messages/MensajeCodigoIncorrecto"
import MensajeContraseñaActualizada from "../Messages/MensajeContraseñaActualizada"
import CrearNuevaContraseña from "./CrearUnaNuevaContraseña"
import MensajeIniciarSesiónParaContinuar from "../Messages/MensajeIniciarSesiónParaContinuar"
import HeaderSesiónIniciada from "../Components/Headers/HeaderSesiónIniciada"
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
                <Route path="/reenviar-codigo" element={<MensajeReenviarCodigo />} />
                <Route path="/confirmacion-reenvio-codigo" element={<MensajeConfirmaciónReenvioCodigo />} />
                <Route path="/codigo-incorrecto" element={<MensajeCodigoIncorrecto />} />
                <Route path="/contrasena-actualizada" element={<MensajeContraseñaActualizada />} />
                <Route path="/crear-nueva-contrasena" element={<CrearNuevaContraseña />} />
                <Route path="/iniciar-sesion-para-continuar" element={<MensajeIniciarSesiónParaContinuar />} />
                <Route path="/sesion-iniciada" element={<HeaderSesiónIniciada />} />
            </Routes>
        </Router>
    )
}
