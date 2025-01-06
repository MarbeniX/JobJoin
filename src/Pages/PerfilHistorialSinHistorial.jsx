import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import FullProfilePicture from "../Images/FullProfilePicture.png"
import RegistroDeServicios from "../Components/RegistroDeServicios"
import "../Css/PerfilHistorialSinHIstorial.css"

export default function PerfilHistorialSinHistorial(){
    return(
        <div className="perfilHistorialSinHistorial">
            <Header/>
            <h1>Mi perfil</h1>
            <div className="perfilHistorial">
                <div className="perfilHistorial-datos">
                    <img src={FullProfilePicture} alt="FullProfilePicture" />
                    <div className="perfilHistorial-datos-info">
                        <h5>Melissa Nuñez</h5>
                        <h6>melissa@email.com</h6>
                    </div>
                    <button>Editar información</button>
                </div>
                <div className="perfilHistorial-historial">
                    <div className="perfilHistorial-historial-menu">
                        <h3>Historial</h3>
                        <h3>Configuración</h3>
                    </div>
                    <div className="perfilHistorial-historial-registro">
                        <div>
                            <h2>¡Aún no tienes historial!</h2>
                            <p>Empieza a aprovechar al máximo JobJoin y contrata a los mejores</p>
                        </div>
                        <button className="perfilHistorial-historial-registro-button">Buscar un servicio</button>
                        <div className="perfilHistorial-historial-registro-registros">
                            <div className="perfilHistorialSinHistorial-registros">
                                <p className="perfilHistorialSinHistorial-titulosComponentes">Todas</p>
                                <div className="perfilHistorialSinHistorial-registroDeServicios">
                                    <RegistroDeServicios/>
                                    <RegistroDeServicios/>
                                    <RegistroDeServicios/>

                                </div>
                            </div>
                            <div>
                                <p className="perfilHistorialSinHistorial-titulosComponentes">Contrataciones</p>
                                <div className="perfilHistorialSinHistorial-registroDeServicios">
                                    <RegistroDeServicios/>
                                    <RegistroDeServicios/>
                                    <RegistroDeServicios/>
                                </div>
                            </div>
                            <div>
                                <p className="perfilHistorialSinHistorial-titulosComponentes">Trabajos</p>	
                                <div className="perfilHistorialSinHistorial-registroDeServicios">
                                    <RegistroDeServicios/>
                                    <RegistroDeServicios/>
                                    <RegistroDeServicios/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="perfilHistorialSinHistorial-configuración">
                        <div className="perfilHistorialSinHistorial-configuración-left">
                            <div className="perfilHistorialSinHistorial-configuración-div">
                                <p className="perfilHistorialSinHistorial-configuración-div-titulo">Preferencia de notificaciones</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Notificaciones por correo</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Notificaciones por plataforma</p>
                            </div>
                            <div className="perfilHistorialSinHistorial-configuración-div">
                                <p className="perfilHistorialSinHistorial-configuración-div-titulo">Privacidad y seguridad</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Administrar dispositivos</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Visibilidad de perfil</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Cambiar contraseña</p>
                            </div>
                            <div className="perfilHistorialSinHistorial-configuración-div">
                                <p className="perfilHistorialSinHistorial-configuración-div-titulo">Historial y actividad</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Descargar historial</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Borrar historial</p>
                            </div>
                        </div>
                        <div className="perfilHistorialSinHistorial-configuración-left">
                            <div className="perfilHistorialSinHistorial-configuración-div">
                                <p className="perfilHistorialSinHistorial-configuración-div-titulo">Idiomas y región</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Seleccionar idioma</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Configuración de ubicación</p>
                            </div>
                            <div className="perfilHistorialSinHistorial-configuración-div">
                                <p className="perfilHistorialSinHistorial-configuración-div-titulo">Hisorial y actividad</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Contactar soporte</p>
                            </div>
                            <div className="perfilHistorialSinHistorial-configuración-div">
                                <p className="perfilHistorialSinHistorial-configuración-div-titulo">Cuenta y sesión</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Eliminar Cuenta</p>
                                <p className="perfilHistorialSinHistorial-configuración-div-text">Cerrar sesión</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}