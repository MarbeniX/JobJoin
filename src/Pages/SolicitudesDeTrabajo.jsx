import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import SolicitudDeTrabajo from "../Components/SolicitudesDeTrabajo"
import PerfilTrabajadorIcon from "../Images/InicioPerfilTrabajador.png"
import "../Css/InicioPerfilDeTrabajador.css"

export default function SolicitudesDeTrabajo(){
    return(
        <>
            <Header/>
            <div className="InicioPerfilDeTrabajador">
                <div className="InicioPerfilDeTrabajador-Texto">
                    <p className="InicioPerfilDeTrabajador-h1">Solicitudes de trabajo</p>
                    <p>Aquí encontrarás las solicitudes que redibas para realizar servicios.</p>
                </div>
                <p>Aún no tienes solicitudes de trabajo. Mantén tu perfil actualizado para aumentar tus posibilidades de ser contactado</p>
                <button>Actualizar mi perfil</button>
                <img src={PerfilTrabajadorIcon} alt="PerfilInicioTrabajador Icon" />
                <div>
                    <SolicitudDeTrabajo/>
                    <SolicitudDeTrabajo/>
                    <SolicitudDeTrabajo/>
                    <SolicitudDeTrabajo/>
                </div>
            </div>
            <Footer/>
        </>
    )
}