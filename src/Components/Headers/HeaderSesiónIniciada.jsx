import JobJoinLogo from "../../Images/JobJoin.png";
import Campanita from "../../Images/Campanita.png";
import ProfilePhoto1 from "../../Images/PerfilTrabajador.png";
import DownwardRow from "../../Images/DownwardRow.png";
import "../../Css/Headers&Footer.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeaderSesiónIniciada(){
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

    const handleBuscarConLogin = () => {
        navigate('/busqueda-con-registro');
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return(
        <div className="header-sesion-iniciada">
            <img src={JobJoinLogo} alt="JobJoin Logo" className="header-sesion-iniciada__logo"/>
            <div className="headerSesionIniciada-links">
                <button
                    onClick={handleBuscarConLogin}
                >Buscar</button>
                <button>Trabajo activo</button>
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
                    <a>Cerrar sesión</a>
                </div>
            )}
        </div>
    )
}