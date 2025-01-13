import JobJoinLogo from "../../Images/JobJoin.png";
import Campanita from "../../Images/Campanita.png";
import ProfilePhoto1 from "../../Images/ProfilePhoto1.png";
import DownwardRow from "../../Images/DownwardRow.png";
import "../../Css/Headers&Footer.css";
import { useNavigate } from "react-router-dom";

export default function HeaderSesiónIniciada(){
    const navigate = useNavigate();

    const handleBuscarConLogin = () => {
        navigate('/busqueda-con-registro');
    };

    return(
        <div className="header-sesion-iniciada">
            <img src={JobJoinLogo} alt="JobJoin Logo" className="header-sesion-iniciada__logo"/>
            <div className="headerSesionIniciada-links">
                <button
                    onClick={handleBuscarConLogin}
                >Buscar</button>
                <button>Trabajo activo</button>
                <img src={Campanita} alt="Campana de notificaciones" />
                <div className="headerSesionIniciada-links-profile">
                    <img src={ProfilePhoto1} alt="Foto de perfil" />
                    <img src={DownwardRow} alt="Flecha hacia abajo" />
                </div>
            </div>
        </div>
    )
}