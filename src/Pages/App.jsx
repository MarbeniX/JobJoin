import Inicio from "./Inicio"
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
import BusquedaConLogin from "./BusquedaConRegistro.jsx"
import PerfilHistorialSinHistorial from "./PerfilHistorialSinHistorial.jsx"
import RegistroDeServicios from "../Components/RegistroDeServicios.jsx"
import InicioPerfilDeTrabajador from "./InicioPerfilDeTrabajador.jsx"
import CrearPerfilTrabajador from "./CrearPerfilTrabajador.jsx"
import MensajeConfirmarGuardarCambios from "../Messages/MensajeConfirmarGuardarCambios.jsx"
import VistaPerfilTrabajador from "./VistaPerfilTrabajador.jsx"
import MensajeEstasSeguroDeSalir from "../Messages/MensajeEstasSeguroDeSalir.jsx"
import PerfilTrabajadorComentarios from "./PerfilTrabajadorComentarios.jsx"
import ComentariosPerfilTrabajadorComentarios from "../Components/ComentariosPerfilTrabajadorComentarios.jsx"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
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
                <Route path="/busqueda-con-registro" element={<BusquedaConLogin />} />
                <Route path="/perfil-historial-sin-historial" element={<PerfilHistorialSinHistorial />} />
                <Route path="/registro-de-servicios" element={<RegistroDeServicios />} />
                <Route path="/inicio-perfil-trabajador" element={<InicioPerfilDeTrabajador />} />
                <Route path="/crear-perfil-trabajador" element={<CrearPerfilTrabajador />} />
                <Route path="/confirmar-guardar-cambios" element={<MensajeConfirmarGuardarCambios />} />
                <Route path="/vista-perfil-trabajador" element={<VistaPerfilTrabajador />} />
                <Route path="/estas-seguro-de-salir" element={<MensajeEstasSeguroDeSalir />} />
                <Route path="/perfil-trabajador-comentarios" element={<PerfilTrabajadorComentarios />} />
                <Route path="/comentarios-perfil-trabajador" element={<ComentariosPerfilTrabajadorComentarios />} />
            </Routes>
        </Router>
    )
}
