import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import FullProfilePicture from "../Images/PerfilTrabajador.png"
import RegistroDeServicios from "../Components/RegistroDeServicios"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Css/PerfilHistorialSinHIstorial.css"
import { useNavigate } from "react-router-dom";

{/*;*/}

export default function PerfilHistorialSinHistorial(){
    const [activeTab, setActiveTab] = useState("historial");
    const navigate = useNavigate();
    const [userData, setUserData] = useState({nombre: "",correo:""});

    useEffect(() => {
        const storedData = localStorage.getItem("user");
        console.log("storedData: ", storedData);
        if(storedData){
            const parsedData = JSON.parse(storedData);
            setUserData({nombre: parsedData.nombre || "",
                        correo: parsedData.correo || "",
            });
        }
    }, []);

    const showHistorial = () => {
        setActiveTab("historial");
    }
    const showConfiguracion = () => {
        setActiveTab("configuracion");
    }
    const handleSearch = () => {  //Redirige a la página de búsqueda
        navigate("/busqueda-con-registro");
    }

    return(
        <div className="perfilHistorialSinHistorial">
            <Header/>
            <h1>Mi perfil</h1>
            <div className="perfilHistorial">
                <div className="perfilHistorial-datos">
                    <img src={FullProfilePicture} alt="FullProfilePicture" />
                    <div className="perfilHistorial-datos-info">
                        <h5>{userData.nombre}</h5>
                        <h6>{userData.correo}</h6>
                    </div>
                    <button>Editar información</button>
                </div>
                <div className="perfilHistorial-historial">
                    <div className="perfilHistorial-historial-menu">
                        <h3 onClick={showHistorial}>Historial</h3>
                        <h3 onClick={showConfiguracion}>Configuración</h3>
                    </div>
                    {activeTab === "historial" && (
                        <div className="perfilHistorial-historial-registro">
                            <div>
                                <h2>¡Aún no tienes historial!</h2>
                                <p>Empieza a aprovechar al máximo JobJoin y contrata a los mejores</p>
                            </div>
                            <button className="perfilHistorial-historial-registro-button" onClick={handleSearch}>Buscar un servicio</button>
                            {/*Todo este div se genera en caso de que si haya un registro, en caso de que no se renderiza el siguiente div mayor de abajo perfilHistorialSinHistorial-configuración  */}
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
                    )}
                    {activeTab === "configuracion" && (
                        <div className="perfilHistorialSinHistorial-configuración">
                            <div className="perfilHistorialSinHistorial-configuración-left">
                                <div className="perfilHistorialSinHistorial-configuración-div">
                                    <p className="perfilHistorialSinHistorial-configuración-div-titulo">Preferencia de notificaciones</p>
                                    <Link to="/" className="perfilHistorialSinHistorial-configuración-div-text">Notificaciones por correo</Link>
                                    <Link to="/" className="perfilHistorialSinHistorial-configuración-div-text">Notificaciones por plataforma</Link>
                                </div>
                                <div className="perfilHistorialSinHistorial-configuración-div">
                                    <p className="perfilHistorialSinHistorial-configuración-div-titulo">Privacidad y seguridad</p>
                                    <Link to = "/" className="perfilHistorialSinHistorial-configuración-div-text">Administrar dispositivos</Link>
                                    <Link to = "/" className="perfilHistorialSinHistorial-configuración-div-text">Visibilidad de perfil</Link>
                                    <Link to = "/" className="perfilHistorialSinHistorial-configuración-div-text">Cambiar contraseña</Link>
                                </div>
                                <div className="perfilHistorialSinHistorial-configuración-div">
                                    <p className="perfilHistorialSinHistorial-configuración-div-titulo">Historial y actividad</p>
                                    <Link to = "/" className="perfilHistorialSinHistorial-configuración-div-text">Descargar historial</Link>
                                    <Link to = "/" className="perfilHistorialSinHistorial-configuración-div-text">Borrar historial</Link>
                                </div>
                            </div>
                            <div className="perfilHistorialSinHistorial-configuración-left">
                                <div className="perfilHistorialSinHistorial-configuración-div">
                                    <p className="perfilHistorialSinHistorial-configuración-div-titulo">Idiomas y región</p>
                                    <Link to = "/" className="perfilHistorialSinHistorial-configuración-div-text">Seleccionar idioma</Link>
                                    <Link to = "/" className="perfilHistorialSinHistorial-configuración-div-text">Configuración de ubicación</Link>
                                </div>
                                <div className="perfilHistorialSinHistorial-configuración-div">
                                    <p className="perfilHistorialSinHistorial-configuración-div-titulo">Hisorial y actividad</p>
                                    <Link to="/" className="perfilHistorialSinHistorial-configuración-div-text">Contactar soporte</Link>
                                </div>
                                <div className="perfilHistorialSinHistorial-configuración-div">
                                    <p className="perfilHistorialSinHistorial-configuración-div-titulo">Cuenta y sesión</p>
                                    <Link to="/" className="perfilHistorialSinHistorial-configuración-div-text">Eliminar Cuenta</Link>
                                    <Link to="/" className="perfilHistorialSinHistorial-configuración-div-text">Cerrar sesión</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}