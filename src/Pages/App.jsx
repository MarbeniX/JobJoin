import Inicio from "./Inicio"
import RecuperarContrasena from "./RecuperarContrasena"  
import RecuperarContrasenaStep1 from "./RecuperarContrasenaStep1"  
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
import PerfilTrabajadorViñeta from "../Components/PerfilTrabajadorViñeta.jsx"
import ContactarForms from "../pop-up forms/ContactarForm.jsx"
import Login from "./Login.jsx"
import ConectarTrabajadorPopup from "../pop-up forms/ConectarTrabajadorPopup.jsx"
import MensajeSolicitudEnviada from "../Messages/MensajeSolicitudEnviada.jsx"
import SolicitudesDeTrabajo from "./SolicitudesDeTrabajo.jsx"
import ContactarFormMensaje from "../pop-up forms/ContactarForm.jsx"
import SolicitudDeTrabajo from "../Components/SolicitudesDeTrabajo.jsx"
import CancelarServicioForm from "../pop-up forms/CancelarServicioForm.jsx"
import MensajeServicioCancelado from "../Messages/MensajeServicioCancelado.jsx"
import TrabajoActivo from "./TrabajoActivo.jsx"
import TrabajoActivoStatus from "../Components/TrabajoActivoStatus.jsx"
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import { useUserContext, UserProvider } from "../UserProvider/UserProvider.jsx"

export default function App() {
    // Proteger rutas privadas
    const PrivateRoute = ({ children }) => {
        const { user } = useUserContext();
        return user ? children : <Navigate to="/iniciar-sesion-para-continuar" />;
    };

    return (
        <Router>
            <UserProvider>
            <Routes>
                <Route path="/" element={<Inicio />} />
                    <Route path="/contrasena-actualizada" element={<MensajeContraseñaActualizada />} />
                    <Route path="/crear-nueva-contrasena" element={<CrearNuevaContraseña />} />
                    <Route path="/iniciar-sesion-para-continuar" element={<MensajeIniciarSesiónParaContinuar />} />
                    <Route path="/sesion-iniciada" element={<PrivateRoute> <HeaderSesiónIniciada /> </PrivateRoute> } />
                    <Route path="/perfil-historial-sin-historial" element={<PrivateRoute><PerfilHistorialSinHistorial /></PrivateRoute>} />
                    <Route path="/registro-de-servicios" element={<RegistroDeServicios />} />
                    <Route path="/busqueda-con-registro" element={<PrivateRoute><BusquedaConLogin /></PrivateRoute>} />
                    <Route path="/inicio-perfil-trabajador" element={<InicioPerfilDeTrabajador />} />
                    <Route path="/crear-perfil-trabajador" element={<CrearPerfilTrabajador />} />
                    <Route path="/confirmar-guardar-cambios" element={<MensajeConfirmarGuardarCambios />} />
                    <Route path="/vista-perfil-trabajador" element={<VistaPerfilTrabajador />} />
                    <Route path="/estas-seguro-de-salir" element={<MensajeEstasSeguroDeSalir />} />
                    <Route path="/perfil-trabajador-comentarios" element={<PerfilTrabajadorComentarios />} />
                    <Route path="/comentarios-perfil-trabajador" element={<ComentariosPerfilTrabajadorComentarios />} />
                    <Route path="/perfil-trabajador-viñeta" element={<PerfilTrabajadorViñeta />} />
                    <Route path="/contactar-form" element={<ContactarForms />} />
                    <Route path="/contactar-form-mensaje" element={<ContactarFormMensaje />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/conectar-trabajador" element={<ConectarTrabajadorPopup />} />
                    <Route path="/solicitud-enviada" element={<MensajeSolicitudEnviada />} />
                    <Route path="/solicitudes-de-trabajo" element={<SolicitudesDeTrabajo />} />
                    <Route path="/solicitud-de-trabajo" element={<SolicitudDeTrabajo />} />
                    <Route path="/recuperarContrasena" element={<RecuperarContrasena />} />
                    <Route path="/recuperarContrasenaStep1" element={<RecuperarContrasenaStep1 />} />
                    <Route path="/bienvenida-cuenta-nueva" element={<MensajeBienvenidaCuentaNueva />} />
                    <Route path="/buscar-sin-registro" element={<BuscarSinRegistro />} />
                    <Route path="/reenviar-codigo" element={<MensajeReenviarCodigo />} />
                    <Route path="/confirmacion-reenvio-codigo" element={<MensajeConfirmaciónReenvioCodigo />} />
                    <Route path="/codigo-incorrecto" element={<MensajeCodigoIncorrecto />} />
                    <Route path="/cancelar-servicio" element={<CancelarServicioForm />} />
                    <Route path="/servicio-cancelado" element={<MensajeServicioCancelado />} />
                    <Route path="/trabajo-activo" element={<TrabajoActivo />} />
                    <Route path="/trabajo-activo-status" element={<TrabajoActivoStatus />} />
            </Routes>
        </UserProvider>
        </Router>
    )
}
