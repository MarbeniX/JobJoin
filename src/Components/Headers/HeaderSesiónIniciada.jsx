import JobJoinLogo from "../../Images/JobJoin.png";
import Campanita from "../../Images/Campanita.png";
import ProfilePhoto1 from "../../Images/ProfilePhoto1.png";
import DownwardRow from "../../Images/DownwardRow.png";
import "../../Css/Headers&Footer.css";

export default function HeaderSesiónIniciada(){
    return(
        <div className="header-sesion-iniciada">
            <img src={JobJoinLogo} alt="JobJoin Logo" className="header-sesion-iniciada__logo"/>
            <div className="headerSesionIniciada-links">
                <button>Buscar</button>
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