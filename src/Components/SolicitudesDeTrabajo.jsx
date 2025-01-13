import FullProfilePicture from "../Images/FullProfilePicture.png"
import RelojIcon from "../Images/RelojIcon.png"
import "../Css/SolicitudDeTrabajo.css"

export default function (){
    return(
        <div className="SolicitudDeTrabajo">
            <div className="SolicitudDeTrabajo-Perfil">
                <img src={FullProfilePicture} alt="FullProfilePicture" />
                <div className="SolicitudDeTrabajo-Texto">
                    <span><img src={RelojIcon} alt="reloj" />En espera de respuesta</span>
                    <p className="SolicitudDeTrasbajo-h1">Ana Rodríguez</p>
                    <p>Necesito ayuda con mi problema eléctrico en mi sala.</p>
                </div>
            </div>
            <div className="SolicitudDeTrabajo-Info">
                <p>24/12/2024 2:10 pm</p>
                <div className="SolicitudDeTrabajo-Buttons">
                    <button className="SolicitudDeTrabajo-Buttons1">Rechazar solicitud</button>
                    <button className="SolicitudDeTrabajo-Buttons2">Aceptar solicitud</button>
                </div>
            </div>
        </div>
    )
}