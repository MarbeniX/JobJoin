import JobJoinLogo from "../../Images/JobJoin.png";
import Campanita from "../../Images/Campanita.png";
import ProfilePhoto1 from "../../Images/PerfilTrabajador.png";
import DownwardRow from "../../Images/DownwardRow.png";
import "../../Css/Headers&Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../UserProvider/UserProvider";


export default function HeaderSesiónIniciada(){
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);
    const { user, setUser } = useUserContext();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const handleLogout = () => {
        //Limpia el usuario del contexto y del localStorage
        setUser(null);
        localStorage.removeItem("user");
        //Redirige a la página de inicio
        navigate("/login");
    };

    return(
        <div className="header-sesion-iniciada">
            <img src={JobJoinLogo} alt="JobJoin Logo" className="header-sesion-iniciada__logo"/>
            <div className="headerSesionIniciada-links">
                <Link to="/busqueda-con-registro">Buscar</Link>
                <Link to="/sin-trabajo-activo">Trabajo activo</Link>
                <Link to="/solicitudes-de-trabajo">Solicitudes de trabajo</Link>
                <img src={Campanita} alt="Campana de notificaciones" />
                <div onClick={toggleMenu} className="headerSesionIniciada-links-profile">
                        <img src={ProfilePhoto1} alt="Foto de perfil" />
                        <img src={DownwardRow} alt="Flecha hacia abajo" />
                </div>
            </div>
            {menuVisible && (
                <div className="headerSesionIniciada-links-menu">
                    <a href="/perfil-historial-sin-historial">Mi perfil personal</a>
                    <a href="/inicio-perfil-trabajador">Mi perfil de trabajador</a>
                    <a>Centro de ayuda</a>
                    <a onClick={handleLogout}>Cerrar sesión</a>
                </div>
            )}
        </div>
    )
}